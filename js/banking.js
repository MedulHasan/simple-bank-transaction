// Deposit
const depositBtn = document.getElementById('deposit-btn');

depositBtn.addEventListener('click', function () {
    let depositInput = document.getElementById('deposit');
    const depositAmount = document.getElementById('deposit-amount');
    const totalBaleance = document.getElementById('total-baleance');
    const totalDeposit = document.getElementById('total-deposit');

    let deposit = depositInput.value;
    depositAmount.innerText = deposit || depositAmount.innerText;
    depositInput.value = '';
    totalDeposit.innerText = parseInt(totalDeposit.innerText) + parseInt(deposit) || totalDeposit.innerText;
    totalBaleance.innerText = parseInt(totalBaleance.innerText) + parseInt(deposit) || totalBaleance.innerText;
})

// withdraw
const withdrawBtn = document.getElementById('withdraw-btn');

withdrawBtn.addEventListener('click', function () {
    let withdrawInput = document.getElementById('withdraw');
    const withdrawAmount = document.getElementById('withdraw-amount');
    const totalBaleance = document.getElementById('total-baleance');
    const totalWithdraw = document.getElementById('total-withdraw');

    let withdraw = withdrawInput.value;
    withdrawAmount.innerText = withdraw || withdrawAmount.innerText;
    withdrawInput.value = '';
    totalWithdraw.innerText = parseInt(totalWithdraw.innerText) + parseInt(withdraw) || totalWithdraw.innerText;
    totalBaleance.innerText = parseInt(totalBaleance.innerText) - parseInt(withdraw) || totalBaleance.innerText;
})