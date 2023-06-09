interface StorageInterface {
	save: (file: File) => void;
}

type VendorStorageType = "s3" | "azule";
type StorageType = VendorStorageType & "local";

class DiskStorage implements StorageInterface {
	constructor() {}

	save(file: File) {
		console.log(`Save file ${file.name} to local disk`);
	}
}

class S3Storage implements StorageInterface {
	constructor() {}

	save(file: File) {
		console.log(`Save file ${file.name} to S3`);
	}
}

class AzuleBlob implements StorageInterface {
	constructor() {}

	save(file: File) {
		console.log(`Save file ${file.name} to Azule Blob`);
	}
}

class VendorStorageFactory {
	#s3Storage: DiskStorage;
	#azuleStorage: AzuleBlob;

	constructor() {
		this.#s3Storage = new S3Storage();
		this.#azuleStorage = new AzuleBlob();
	}

	save(type: VendorStorageType, file: File) {
		switch (type) {
			case "s3":
				this.#s3Storage.save(file);
				break;
			case "azule":
				this.#azuleStorage.save(file);
			default:
				throw new Error("Save type doesn't support");
		}
	}
}

class StorageFactory {
	#localStorage: DiskStorage;
	#venderStorage: VendorStorageFactory;

	constructor() {
		this.#localStorage = new DiskStorage();
		this.#venderStorage = new VendorStorageFactory();
	}

	save(storageType: StorageType, file: File) {
		switch (storageType) {
			case "s3":
				this.#venderStorage.save("s3", file);
				break;
			case "azule":
				this.#venderStorage.save("azule", file);
				break;
			default:
				this.#localStorage.save(file);
				break;
		}
	}
}
