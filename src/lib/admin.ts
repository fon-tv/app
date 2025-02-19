const ADMIN_KEY = process.env.ADMIN_KEY;


export function validateAdmin(request: Request) {
    const key = request.headers.get("admin-key");
    console.log("key", key);
    return key && key === ADMIN_KEY;
}
