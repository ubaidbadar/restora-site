const rupees = new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 });

/** An amount as a Pakistani menu prints it: "Rs 1,250". */
const formatRs = (amount: number) => `Rs ${rupees.format(amount)}`;

export default formatRs;
