/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import '@payloadcms/next/css'
import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from '@payloadcms/next/routes'

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const PUT = REST_PUT(config)
export const OPTIONS = REST_OPTIONS(config)

import { NextApiRequest, NextApiResponse } from 'next'

// Helper function to enable CORS
const cors = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000') // Allow requests from this origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')

  // Handle pre-flight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return true
  }
  return false
}

// Your API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS
  if (cors(req, res)) return

  // Your API logic here
  res.status(200).json({ message: 'Hello, World!' })
}
