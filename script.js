let web3;
let contract;

// 导入 ABI 文件
fetch('abi.json')
    .then(response => response.json())
    .then(abi => {
        initContract(abi);
    });

// 初始化合约
function initContract(abi) {
    const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE'; // 替换为你的合约地址
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(abi, contractAddress);
}

// 连接 MetaMask 钱包
async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('connectButton').innerText = "Wallet Connected";
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// 游戏 1 的参与函数
async function participateInGame1() {
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.participateInGame1().send({ from: accounts[0], value: web3.utils.toWei('50', 'ether') });
        alert("Participation successful!");
    } catch (error) {
        console.error("Error participating in Game 1:", error);
    }
}

// 获取游戏 1 的进度
async function getGame1Progress() {
    try {
        const result = await contract.methods.getLatestGame1Progress().call();
        document.getElementById('game1Result').innerText = `Players: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game progress:", error);
    }
}

// 获取游戏 1 的中奖者
async function getGame1Winners() {
    try {
        const result = await contract.methods.getGame1Winners().call();
        document.getElementById('game1Result').innerText = `Winners: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game winners:", error);
    }
}

// 游戏 2 的参与函数
async function participateInGame2() {
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.participateInGame2().send({ from: accounts[0], value: web3.utils.toWei('100', 'ether') });
        alert("Participation successful!");
    } catch (error) {
        console.error("Error participating in Game 2:", error);
    }
}

// 获取游戏 2 的进度
async function getGame2Progress() {
    try {
        const result = await contract.methods.getLatestGame2Progress().call();
        document.getElementById('game2Result').innerText = `Players: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game progress:", error);
    }
}

// 获取游戏 2 的中奖者
async function getGame2Winners() {
    try {
        const result = await contract.methods.getGame2Winners().call();
        document.getElementById('game2Result').innerText = `Winners: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game winners:", error);
    }
}

// 游戏 3 的参与函数
async function participateInGame3() {
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.participateInGame3().send({ from: accounts[0], value: web3.utils.toWei('100', 'ether') });
        alert("Participation successful!");
    } catch (error) {
        console.error("Error participating in Game 3:", error);
    }
}

// 获取游戏 3 的进度
async function getGame3Progress() {
    try {
        const result = await contract.methods.getLatestGame3Progress().call();
        document.getElementById('game3Result').innerText = `Players: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game progress:", error);
    }
}

// 获取游戏 3 的中奖者
async function getGame3Winners() {
    try {
        const result = await contract.methods.getGame3Winners().call();
        document.getElementById('game3Result').innerText = `Winners: ${result.join(', ')}`;
    } catch (error) {
        console.error("Error getting game winners:", error);
    }
}

// 绑定连接钱包的按钮点击事件
document.getElementById('connectButton').addEventListener('click', connectWallet);
