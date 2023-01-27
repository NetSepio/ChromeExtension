import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// WALLET ADDRESS
export const walletAddress = writable<string>(
	(browser && localStorage.getItem('walletAddress')) || ''
);

walletAddress.subscribe((value) => browser && localStorage.setItem('walletAddress', value));

// WALLET PRIVATE KEY
export const privateKey = writable((browser && sessionStorage.getItem('privateKey')) || '');

privateKey.subscribe((value) => browser && sessionStorage.setItem('privateKey', value));

// MNEMONIC PHASE OF THE WALLET
const mnemonicPhaseStore = writable((browser && sessionStorage.getItem('mnemonicPhase')) || '');

mnemonicPhaseStore.subscribe((value) => browser && sessionStorage.setItem('mnemonicPhase', value));

export const setMnemonicPhase = (value: string) => {
	browser && sessionStorage.setItem('mnemonicPhase', value);
	mnemonicPhaseStore.set(value);
};

export const mnemonicPhase = {
	subscribe: mnemonicPhaseStore.subscribe,
	set: setMnemonicPhase
};

// LOGIN JWT TOKEN
export const jwtToken = writable<string>((browser && localStorage.getItem('jwtToken')) || '');

jwtToken.subscribe((value) => browser && localStorage.setItem('jwtToken', value));

// ONBOARDING STEPS THAT IS LEFT FOR THE USER TO COMPLETE
const onboardingStepsLeftStore = writable(
	(browser && Number(localStorage.getItem('onboardingStepsLeft'))) || 4
);

onboardingStepsLeftStore.subscribe(
	(value) => browser && localStorage.setItem('onboardingStepsLeft', value)
);

export const setOnboardingStepsLeft = (value: number) => {
	browser && localStorage.setItem('onboardingStepsLeft', `${value}`);
	onboardingStepsLeftStore.set(value);
};

export const decreaseOnboardingStepsLeft = () => {
	onboardingStepsLeftStore.update((value) => {
		browser && localStorage.setItem('onboardingStepsLeft', `${value - 1}`);
		return value - 1;
	});
};

export const increaseOnboardingStepsLeft = () => {
	onboardingStepsLeftStore.update((value) => {
		browser && localStorage.setItem('onboardingStepsLeft', value + 1);
		return value + 1;
	});
};

export const onboardingStepsLeft = {
	subscribe: onboardingStepsLeftStore.subscribe,
	set: setOnboardingStepsLeft,
	decrease: decreaseOnboardingStepsLeft,
	increase: increaseOnboardingStepsLeft
};

// HASHED PASSWORD
export const hashedPassword = writable((browser && localStorage.getItem('hashedPassword')) || '');

hashedPassword.subscribe((value) => browser && localStorage.setItem('hashedPassword', value));

// THE IV/SALT OF THE STORED HASH
export const iv = writable<string>((browser && localStorage.getItem('iv')) || null);
iv.subscribe((value) => browser && localStorage.setItem('iv', value));
