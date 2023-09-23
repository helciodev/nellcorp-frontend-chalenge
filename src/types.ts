export interface UserData {
	basicInfo: {
		firstName: string;
		lastName: string;
		profilePic: string;
		password: number;
	};
	balance: number;
	transactions: {
		id: number;
		type: string;
		evolvingParty: string;
		amount: number;
		balanceAfterTransaction: number;
		date: string;
	}[];
}
