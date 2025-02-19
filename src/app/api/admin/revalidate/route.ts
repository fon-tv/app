import { revalidateTag } from "next/cache";
import { validateAdmin } from "@/lib/admin";
import { z } from "zod";

const RequestBodySchema = z.object({
	tags: z.string().array(),
});

export async function POST(request: Request) {
	if (!validateAdmin(request)) {
		return new Response(null, { status: 404 });
	}
	const { data, success } = await RequestBodySchema.safeParseAsync(await request.json());
	if (!success) {
		return new Response(null, { status: 404 });
	}
	data.tags.forEach((tag) => revalidateTag(tag));
	return new Response(null, { status: 200 });
}
