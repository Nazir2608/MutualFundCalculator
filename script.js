function calculateInterest() {
    // Get input values
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
    const annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value) / 100;
    const numberOfYears = parseInt(document.getElementById('number-of-years').value);
    console.log(initialInvestment);
    console.log(monthlyContribution);
    console.log(annualInterestRate);
    console.log(numberOfYears);
    // Compound interest calculation
    const months = numberOfYears * 12;
    console.log(months);
    const monthlyInterestRate = annualInterestRate / 12;
    console.log("monthlyInterestRate:"+monthlyInterestRate);
    let futureValue = initialInvestment * Math.pow(1 + monthlyInterestRate, months);
    console.log("futureValue"+ futureValue);

    for (let i = 1; i <= months; i++) {
        futureValue += monthlyContribution * Math.pow(1 + monthlyInterestRate, months - i);
    }

    const totalInvested = initialInvestment + (monthlyContribution * months);
    const compoundInterestEarned = futureValue - totalInvested;

    // Display results
    document.getElementById('total-amount').textContent = `Total Amount: ₹${futureValue.toFixed(2)}`;
    document.getElementById('total-invested').textContent = `Total Invested: ₹${totalInvested.toFixed(2)}`;
    document.getElementById('compound-interest-earned').textContent = `Compound Interest Earned: ₹${compoundInterestEarned.toFixed(2)}`;
}
