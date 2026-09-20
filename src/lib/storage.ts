import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

const endpoint = process.env.AWS_ENDPOINT_URL_S3;
const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucket = process.env.NEON_S3_BUCKET;

const client = new S3Client({
  region,
  endpoint,
  credentials: {
    accessKeyId: accessKeyId ?? "",
    secretAccessKey: secretAccessKey ?? "",
  },
  forcePathStyle: true,
});

function requireConfig() {
  if (!endpoint || !region || !accessKeyId || !secretAccessKey || !bucket) {
    throw new Error(
      "Neon Object Storage belum dikonfigurasi. Isi AWS_ENDPOINT_URL_S3, AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, dan NEON_S3_BUCKET di .env."
    );
  }
}

function sanitize(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-");
}

export function publicUrl(key: string): string {
  return `${endpoint}/${bucket}/${key}`;
}

export function keyFromUrl(url: string): string | null {
  const prefix = `${endpoint}/${bucket}/`;
  if (!url.startsWith(prefix)) return null;
  return url.slice(prefix.length);
}

export async function uploadFile(file: File, folder: string): Promise<string> {
  requireConfig();
  const key = `${folder}/${randomUUID()}-${sanitize(file.name)}`;
  const arrayBuffer = await file.arrayBuffer();
  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: Buffer.from(arrayBuffer),
      ContentType: file.type || "application/octet-stream",
    })
  );
  return key;
}

export async function deleteFileByUrl(url: string): Promise<void> {
  requireConfig();
  const key = keyFromUrl(url);
  if (!key) return;
  await client.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    })
  );
}
