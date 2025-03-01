import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";

interface SignedUrlResponse {
  url: string;
}

// Custom error type to handle S3 errors
type S3Error = {
  message: string;
  code?: string;
  statusCode?: number;
};

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("fileName");

  if (!fileName) {
    return new NextResponse("File name is required", { status: 400 });
  }

  const s3Client = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT!,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY!,
      secretAccessKey: process.env.R2_SECRET_KEY!,
    },
    forcePathStyle: true,
  });

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: fileName,
    });

    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 60 * 5,
    });

    const responseBody: SignedUrlResponse = { url: signedUrl };
    return new NextResponse(JSON.stringify(responseBody), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error generating signed URL", error);

    // Type guard to check if error is our expected type
    const s3Error = error as S3Error;
    const errorMessage = s3Error.message || "Error generating signed URL";

    return new NextResponse(errorMessage, {
      status: s3Error.statusCode || 500,
    });
  }
}
