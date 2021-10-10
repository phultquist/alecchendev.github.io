---
title: 'Breaking Down Cryptocurrency'
date: '2021-09-22'
---

The original bitcoin whitepaper is very readable and concise, but because of this it's very dense. It can be hard to grasp everything in the paper; this may help with that. I just wanted to write this to test/practice my understanding of bitcoin/cryptocurrency from the ground up and thought it could be a helpful resource as an alternative explanation for some of the concepts when being introduced to cryptocurrency.

- Outline
    - Currency
    - Digital currency
    - Decentralized currency
    - Cryptocurrency
- What is currency? Something where there is general consensus on the value.
    - Economic definition: medium of exchange, medium of accounting, store of value. Does bitcoin fit these? yes.
    - The only thing we really need in order to use a currency is to know how much any person has of the currency -
        - How do we do this?
- The only thing we need for a functioning currency is to know how much any person has
    - Why? So that we know they have enough to pay us, to know they aren't creating fake money, etc.
    - Side note: This is easy with physical currency, you just pull up your bag of gold and we've got all we need. We'll see how this is more nuanced when it comes to digital currency.
- Digital currency: have computers keep track of who has how much
    - Nothing new here. This is how we have credit/debit, taxes, online purchases, etc. We leave it up to banks/bank software, venmo, paypal to keep track of how much we have.
    - Note: these computers are managed by a central organization.
        - These organizations have a lot of power because of the trust we put in them.
            - With this power they can impose transaction fees, decide who is allowed to enter the market (leads to loss of privacy through requiring personal information to prevent fraud).
            - We're subject to their infrastructure - if they change software, if their servers are down, if their tech can't scale properly
        - The only thing holding them back from abusing their power is the law, consequences that would ensue (were they to break the law) enforced by the government.
    - Note: the government enforces the correct usage/management of the currency. They also have the power to create/regulate as much as they want.
        - What if your government just kept printing money? Well they can. Enter hyperinflation, e.g. zimbabwe, venezuala.
- Decentralized currency: purely digital currency where the correct usage/management of the currency is enforced by participating nodes on a network of computers
    - Through a set of protocols, manifested through software, strangers (computers) can cooperate to agree on certain things, i.e. transactions/data
        - In the case of currency these transactions are financial transfers of currency between different entities, but it can be generalized to be that computers can cooperate to agree on any form of data. Enter the topic of consensus in distributed systems.
        - Wdym protocol
            - High level: a set of terms agreed upon by participating entities for how they can interact.
            - Example in software: HTTP - hypertext transfer protocol - when your browser visits [google.com](http://google.com) it (among other things) sends a block of data in a certain format, a format that complies to the HTTP protocol, to a server that then responds with the right data, i.e. the html/css/js representing google's landing page.
            - If we just sent requests in any formats we liked, we'd have to write a lot of different software to make the internet work like it does today.
            - If we agree on how we want our software to work, i.e. the software we use abides by certain protocols, we can form systems that can efficiently accomplish complex tasks.
    - Instead of leaving it up to banks/fintech companies to have control/responsibility for keeping track of who has how much money, everybody/every computer participating in the network keeps track of who has how much money
- So how do these computers actually keep track of who has what?
    - Flow:
        1. Everyone keeps their own record, some might dare to call it a "ledger," of all transactions that ever occurred
        2. When someone gives you money/you give them money, check your ledger to ensure they/you have enough
        3. Tell everyone else about your transaction so they can update their ledger
    - For more info, check out my piece titled "Breaking Down Decentralization" and/or "Block Verification"