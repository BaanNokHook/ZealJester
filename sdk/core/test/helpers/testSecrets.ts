export const { TEST_AGAINST, TEST_SECRETS } = process.env

export const testSecrets: {
  PASSWORD: string
  COGNITO_PASSWORD: string
  COGNITO_USERNAME: string
  COGNITO_PHONE_NUMBER: string
  COGNITO_USERNAME_NO_KEY: string
  COGNITO_USER_UNCONFIRMED: string
  COGNITO_USERNAME_UNCONFIRMED: string
  COGNITO_USERNAME_EXISTS: string
  ENCRYPTED_SEED_JOLO: string
  ENCRYPTED_SEED_ELEM: string
  DID_ELEM_SHORT: string
  DID_ELEM_PARAMS: string
  DID_JOLO: string
  SEED_JOLO: string
  ISSUER_ENCRYPTED_SEED: string
  HOLDER_PASSWORD: string
  HOLDER_ENCRYPTED_SEED: string
  UPDATING_ENCRYPTED_SEED: string
  UPDATING_DID: string
  ISSUER_ELEM_SEED: string
  DEV_API_KEY_HASH: string
  PROD_API_KEY_HASH: string
  STAGING_API_KEY_HASH: string
  REVOCATION_ENCRYPTED_SEED: string
  REVOCATION_PASSWORD: string
} = JSON.parse(TEST_SECRETS)
