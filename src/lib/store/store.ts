import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// WALLET ADDRESS
const walletAddressStore = writable((browser && localStorage.getItem('walletAddress')) || '');

walletAddressStore.subscribe((value) => browser && localStorage.setItem('walletAddress', value));

export const setWalletAddress = (value: string) => {
	browser && localStorage.setItem('walletAddress', value);
	walletAddressStore.set(value);
};

export const walletAddress = {
	subscribe: walletAddressStore.subscribe,
	set: setWalletAddress
};
// WALLET ADDRESS
const privateKeyStore = writable((browser && localStorage.getItem('privateKey')) || '');

privateKeyStore.subscribe((value) => browser && localStorage.setItem('privateKey', value));

export const setPrivateKey = (value: string) => {
	browser && localStorage.setItem('privateKey', value);
	privateKeyStore.set(value);
};

export const privateKey = {
	subscribe: privateKeyStore.subscribe,
	set: setPrivateKey
};

// MNEMONIC PHASE OF THE WALLET
const mnemonicPhaseStore = writable((browser && localStorage.getItem('mnemonicPhase')) || '');

mnemonicPhaseStore.subscribe((value) => browser && localStorage.setItem('mnemonicPhase', value));

export const setMnemonicPhase = (value: string) => {
	browser && localStorage.setItem('mnemonicPhase', value);
	mnemonicPhaseStore.set(value);
};

export const mnemonicPhase = {
	subscribe: mnemonicPhaseStore.subscribe,
	set: setMnemonicPhase
};

// LOGIN JWT TOKEN
const jwtTokenStore = writable((browser && localStorage.getItem('jwtToken')) || '');

jwtTokenStore.subscribe((value) => browser && localStorage.setItem('jwtToken', value));

export const setJwtToken = (value: string) => {
	browser && localStorage.setItem('jwtToken', value);
	jwtTokenStore.set(value);
};

export const jwtToken = {
	subscribe: jwtTokenStore.subscribe,
	set: setJwtToken
};

// ONBOARDING STEPS THAT IS LEFT FOR THE USER TO COMPLETE
const onboardingStepsLeftStore = writable(
	(browser && Number(localStorage.getItem('onboardingStepsLeft'))) || 3
);

onboardingStepsLeftStore.subscribe(
	(value) => browser && localStorage.setItem('onboardingStepsLeft', value.toString())
);

export const setOnboardingStepsLeft = (value: number) => {
	browser && localStorage.setItem('onboardingStepsLeft', value.toString());
	onboardingStepsLeftStore.set(value);
};

export const decreaseOnboardingStepsLeft = () => {
	onboardingStepsLeftStore.update((value) => {
		browser && localStorage.setItem('onboardingStepsLeft', (value - 1).toString());
		return value - 1;
	});
};

export const increaseOnboardingStepsLeft = () => {
	onboardingStepsLeftStore.update((value) => {
		browser && localStorage.setItem('onboardingStepsLeft', (value + 1).toString());
		return value + 1;
	});
};

export const onboardingStepsLeft = {
	subscribe: onboardingStepsLeftStore.subscribe,
	set: setOnboardingStepsLeft,
	decrease: decreaseOnboardingStepsLeft,
	increase: increaseOnboardingStepsLeft
};
