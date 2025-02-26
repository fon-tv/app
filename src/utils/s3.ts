export const getS3MediaFileUrl = (path: string) => {
	return `${process.env.NEXT_PUBLIC_S3_URL}/${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}/${process.env.NEXT_PUBLIC_MEDIA_FOLDER}/${path}`;
};
