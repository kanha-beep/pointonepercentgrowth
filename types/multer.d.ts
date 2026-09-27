declare module "multer" {
  type Options = {
    storage?: unknown;
    limits?: { fileSize?: number };
  };

  type Multer = (options?: Options) => unknown;

  const multer: Multer & {
    memoryStorage: () => unknown;
  };

  export default multer;
}
