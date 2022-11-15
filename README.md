# Ecorypto

##### *Hack Web3 - TRON x EasyA Hackathon [12-13 Nov] in Harvard Univ.*

#####  We got an honorable mention prize,congrats team!

### Overview
Ecorypto aims to incentivize users to build a more sustainable lifestyle. By completing up to 4 eco-friendly challenges per day, users can collect eco-coins to purchase and trade accessory NFTs. Users purchase these NFTs to level up and personalize their avatars to show off to friends and family.

Structure： 

 --  Ecorypto： Smart contract code
 
 --  Other： Web-front related


In our ecosystem, we issued our own TRC20 token called ECO and crafted NFT (TRC721) for the avatar costumes and equipment. Users can use tokens to buy NFTs.

### EcoryptoNFT (ECON) (TRC721)
Our NFT follows the TRC721 ​​standard and stores the images on the Pinata IPFS system. Users can use ECO to mint and buy NFTs, or they can sell NFTs to get ECOs.

[EcoryptoNFT (ECON)](https://shasta.tronscan.org/?_ga=2.16682230.1338761535.1668274246-1179746277.1668274246#/token721/TA5RtpBmV8r1Z6QKdqkG22zUazm16Pa86U)

### Ecorypto (ECO) (TRC20)
The total supply is 1000000000 with 6 decimals. Our goal is to make a more eco-friendly environment, and it is crucial that we cannot make huge consumption and carbon emissions when we do the transaction. Tron is a more eco-friendly blockchain compared to the other PoS chain.

[Ecorypto (ECO) Token](https://shasta.tronscan.org/?_ga=2.16682230.1338761535.1668274246-1179746277.1668274246#/token20/TYMeHyQBDot2DNC5Zq1DoFUnfyc3ojRiPC)

### Users actions reward 

A.Motivation: can record their actions through transactions,get related reward/incentives,and they also can mint NFT for sale.

B.User data verification:
  access the data from iwatch
  access data from third-party app( such as car/gas usage,recycle  trade)

C. Record their actions (  Record the users action and reward them)

  Step 1: We define some eco-friendliness actions type such as walk/step/Electric car/Resource recycle,and send the users fixed reward by the application organizer.( Through TronIDE to deploy the contract)
          
  Step 2: Got the complete action event and it will call the different reward function of the smart contract( Tronweb to connect the UI and smart contract,embedded ABI of contract)
  
 [An users reward transaction example](https://shasta.tronscan.org/?_ga=2.16682230.1338761535.1668274246-1179746277.1668274246#/transaction/f4aac125766c5bd2980980e99ae7e65b69c197d3bb0f0e7027408a17a28a23dc)

###  Frontend

We used bootstrap and tronweb to interact with our smart contracts.[This is the demo](https://iamjennyzhao.github.io/tron/)
