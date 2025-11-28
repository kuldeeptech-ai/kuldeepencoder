import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Base64EncoderDecoderContent } from "./encoder-decoder-content"

export default function EncoderDecoder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Hide a message in an emoji</CardTitle>
        </CardHeader>
        <Suspense fallback={<CardContent>Loading...</CardContent>}>
          <Base64EncoderDecoderContent />
        </Suspense>
        <div style="text-align: center; padding: 20px; color: #666; font-family: Arial, sans-serif; font-size: 14px; border-top: 1px solid #eee; margin-top: 30px;">
    &copy; 2025 Kuldeep CSC Center. All Rights Reserved.
</div>
      </Card>
    </div>
  )
}
