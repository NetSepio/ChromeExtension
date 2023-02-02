import { NFTStorage, File } from 'nft.storage';
import { PUBLIC_NFT_STORAGE_API_KEY, PUBLIC_GATEWAY_URL } from '$env/static/public';
import { jwtToken } from '$lib/store/store';
const client = new NFTStorage({ token: PUBLIC_NFT_STORAGE_API_KEY });

interface MetaDataType {
	name: string;
	description: string;
	category: string;
	image: string;
	domainAddress: string;
	siteUrl: string | undefined;
	siteType: string;
	siteTag: string;
	siteSafety: string;
}

interface ReviewType {
	category: string;
	domainAddress: string;
	siteUrl: string | undefined;
	siteType: string;
	siteTag: string;
	siteSafety: string;
	metaDataUri: string;
	voter: string;
}

export const storeMetaData = async (data: MetaDataType) => {
	try {
		const objectString = JSON.stringify(data);
		const objectBlob = new Blob([objectString], { type: 'application/json' });

		const metadata = await client.storeBlob(objectBlob);
		return [metadata, null];
	} catch (error) {
		console.error(error);
		return [null, error];
	}
};

export const createReview = async (data: ReviewType) => {
	try {
		let token = '';
		jwtToken.subscribe((val) => {
			token = val;
		});
		let response = await fetch(`${PUBLIC_GATEWAY_URL}/delegateReviewCreation`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `${token}`
			},
			body: JSON.stringify(data)
		});

		let result = await response.json();

		return [result, null];
	} catch (error) {
		console.error(error);
		return [null, error];
	}
};