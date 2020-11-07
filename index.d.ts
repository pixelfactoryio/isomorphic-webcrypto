interface WebCrypto extends Crypto {
    ensureSecure(): Promise<any>;
}
declare var crypto: WebCrypto
export default crypto;
