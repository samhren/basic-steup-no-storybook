import { z } from 'zod'
import * as privateEnv from '$env/static/private'

/**
 * To use any type besides string, you need to use zod's `coerce` method.
 */

const schema = z.object({
	// Add your private env variables here
	GOOGLE_ID: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	GOOGLE_SECRET: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	APPLE_ID: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	APPLE_SECRET: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	TWITTER_ID: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	TWITTER_SECRET: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	FACEBOOK_ID: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	FACEBOOK_SECRET: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	AUTH_SECRET: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	}),
	DATABASE_URL: z.string().min(1).regex(new RegExp('^\\S*$'), {
		message: 'No spaces allowed'
	})
})

const parsed = schema.safeParse(privateEnv)

if (!parsed.success) {
	console.error('❌ Invalid environment variables:', JSON.stringify(parsed.error.format(), null, 4))
	process.exit(1)
}

export default parsed.data
