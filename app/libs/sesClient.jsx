import { SESClient } from "@aws-sdk/client-ses";
import { secret } from '@aws-amplify/backend';

// Set the AWS Region.
const REGION = "us-east-1";
const creds = {
    accessKeyId: secret('secret_key'),
    secretAccessKey: secret('secret_id'),
    sessionToken: secret('session_token'),
};

// Create SES service object.
const sesClient = new SESClient({ 
    region: REGION, 
    credentials: creds
});
export { sesClient };