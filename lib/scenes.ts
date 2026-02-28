import type { Scene } from "./types";

export const scenes: Record<string, Scene> = {
  // ==================== PROLOGUE ====================

  intro_1: {
    id: "intro_1",
    character: "narrator",
    dialogue:
      "your phone buzzes.\n\nTelegram. unknown contact.\n\nyou almost ignore it.",
    next: "intro_2",
  },

  intro_2: {
    id: "intro_2",
    actTitle: "PROLOGUE",
    character: "humpy",
    dialogue: "psst. hey. you there.",
    next: "intro_3",
  },

  intro_3: {
    id: "intro_3",
    character: "humpy",
    dialogue:
      "yeah you. I've been watching your on-chain activity. found your handle on GitHub actually. nice commit history.\n\nyou've got the right kind of energy.",
    next: "intro_4",
  },

  intro_4: {
    id: "intro_4",
    character: "humpy",
    dialogue:
      "name's Humpy.\n\nmaybe you've heard of me. maybe you haven't.\n\nyou will.",
    next: "intro_5",
  },

  intro_5: {
    id: "intro_5",
    character: "humpy",
    dialogue:
      "I pulled off something beautiful at a certain large lending protocol a few years back. \n\nhad to lay low for a while.",
    next: "intro_6",
  },

  intro_6: {
    id: "intro_6",
    character: "humpy",
    dialogue:
      'I\'m back now. and I need someone to run a little operation.\n\nfor "educational purposes".',
    next: "intro_7",
  },

  intro_7: {
    id: "intro_7",
    character: "humpy",
    dialogue:
      "the target is VaultDAO. they're sitting on $400M in treasury assets.\n\nit has a governance system. we are going to learn how that governance system works.\n\nby exploiting it.",
    next: "intro_choice",
  },

  intro_choice: {
    id: "intro_choice",
    character: "humpy",
    dialogue: "you in?",
    choices: [
      {
        label: "I'm in. Let's go.",
        next: "act1_start",
        hint: "Pro tip: Only agree to obviously evil proposals in video games.",
      },
      {
        label: "Tell me more about VaultDAO first.",
        next: "intro_more_1",
        hint: "Due diligence. Humpy respects this.",
      },
    ],
  },

  intro_more_1: {
    id: "intro_more_1",
    character: "humpy",
    dialogue:
      "due diligence. I like it.\n\nVaultDAO launched 18 months ago. yield optimization protocol. the VAULT token is their governance token. 100 million in circulation.",
    next: "intro_more_2",
  },

  intro_more_2: {
    id: "intro_more_2",
    character: "humpy",
    dialogue:
      "the treasury holds $400M that the community manages through proposals. any token holder can submit one. majority vote wins.\n\nnow. you in?",
    choices: [
      {
        label: "Yeah. Let's do this.",
        next: "act1_start",
      },
    ],
  },

  // ==================== ACT 1: ACCUMULATION ====================

  act1_start: {
    id: "act1_start",
    actTitle: "ACT I: ACCUMULATION",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: THE GOVERNANCE TOKEN",
    lesson: {
      term: "Governance Token",
      definition:
        "A token that gives holders the right to vote on protocol decisions. In most DAOs, 1 token = 1 vote.\n\nThe more tokens you hold, or have delegated to you, the more voting power you have.",
      example:
        "VaultDAO's VAULT token: 100M total supply. Hold or control enough, and you decide everything. Yield parameters, contract upgrades, where the treasury goes.",
    },
    next: "act1_humpy_1",
  },

  act1_humpy_1: {
    id: "act1_humpy_1",
    character: "humpy",
    dialogue:
      "governance is game theory and voting power. mostly voting power.\n\nto control VaultDAO, we need VAULT tokens. or more precisely: voting power delegated to us.",
    next: "act1_humpy_2",
  },

  act1_humpy_2: {
    id: "act1_humpy_2",
    character: "humpy",
    dialogue:
      "here's the thing most people don't understand about token governance.\n\nholding the token doesn't automatically give you a vote.\n\nyou have to delegate. to yourself, or to someone else.",
    next: "act1_delegation_lesson",
  },

  act1_delegation_lesson: {
    id: "act1_delegation_lesson",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: DELEGATION",
    lesson: {
      term: "Delegation",
      definition:
        "Token holders can delegate their voting power to any address, including themselves. If you hold tokens but never delegate, you have zero voting power.\n\nThis creates a massive pool of unused votes sitting on-chain but doing nothing.",
      example:
        "Alice holds 500 tokens and delegates to herself. When a proposal goes live, she votes. Her 500 tokens count.\n\nBob holds 500 tokens but never delegates. Same proposal goes live. Bob doesn't vote, not because he forgot, but because he can't. His voting power is zero.\n\nCarol holds 500 tokens and never votes either. But she delegated to a community member she trusted. Her 500 tokens back every vote that delegate casts on her behalf.",
    },
    next: "act1_humpy_post_delegation",
  },

  act1_humpy_post_delegation: {
    id: "act1_humpy_post_delegation",
    character: "humpy",
    dialogue:
      "so our job is simple. find those dead tokens.\n\nbut first, there's another number we need to understand.\n\nhow many tokens do we actually need to win?",
    next: "act1_quorum_lesson",
  },

  act1_quorum_lesson: {
    id: "act1_quorum_lesson",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: QUORUM",
    lesson: {
      term: "Quorum",
      definition:
        "The minimum amount of voting power that must participate in a vote for it to be valid. Set too high, nothing ever passes. Set too low, a tiny minority can control everything.",
      example:
        "VaultDAO requires 4% of all VAULT tokens to reach quorum. That's 4 million tokens.\n\nIf fewer than 4M votes are cast, the proposal fails regardless of the yes/no split.",
    },
    next: "act1_humpy_3",
  },

  act1_humpy_3: {
    id: "act1_humpy_3",
    character: "humpy",
    dialogue:
      "VaultDAO's quorum is 4%. 4 million tokens. sounds like a lot.\n\nbut only about 15% of VAULT holders have ever delegated. the other 85%? dead tokens. sleeping giants.",
    next: "act1_roi_explain",
  },

  act1_roi_explain: {
    id: "act1_roi_explain",
    character: "humpy",
    dialogue:
      "let me put this in terms you'll appreciate.\n\nVAULT trades at $5. 100 million tokens in circulation. $500M market cap.\n\nthe treasury holds $400M. accumulated from two years of protocol fees. mostly ETH and stablecoins.\n\nto hit quorum we need 4% of supply. 4 million tokens. at $5 each, that's $20 million.\n\n$20M to get a controlling vote over a $400M treasury. 20x leverage on every dollar you put in.\n\nit's not crime. it's just math. governance is the best trade I've ever seen.",
    next: "act2_anticapture",
  },

  act1_strategy_choice: {
    id: "act1_strategy_choice",
    character: "humpy",
    dialogue: "two paths. which do you want to take?",
    choices: [
      {
        label: "Buy VAULT on the open market",
        next: "buy_1",
        effect: { votes: 40 },
        hint: "This could get expensive, but we need to move fast",
      },
      {
        label: "Find dormant whales and ask for delegation",
        next: "delegate_1",
        effect: { reputation: 10 },
        hint: "Delegation is free for the delegator. A compelling pitch can move votes, but it takes time",
      },
    ],
  },

  // BUY PATH

  buy_1: {
    id: "buy_1",
    character: "humpy",
    dialogue:
      "classic. I respect the direct approach.\n\nyou start buying. 200k VAULT at a time, spread across multiple wallets. price barely moves. good.",
    next: "buy_2",
    effect: { votes: 30 },
  },

  buy_2: {
    id: "buy_2",
    character: "humpy",
    dialogue:
      "three days later. you control 3.2 million VAULT.\n\nalmost at quorum. but we need a bit more. luckily I've been quietly picking up a position too. consider it a loan. partners share resources.",
    next: "act1_merge",
    effect: { votes: 10 },
  },

  // DELEGATE PATH

  delegate_1: {
    id: "delegate_1",
    character: "humpy",
    dialogue:
      "elegant. cheaper too.\n\nI've identified six dormant whales. between them: 8.2 million VAULT tokens. none currently delegated anywhere meaningful.",
    next: "delegate_2",
  },

  delegate_2: {
    id: "delegate_2",
    character: "humpy",
    dialogue:
      "take this one. wallet ending 0xAAEF. holds 2.4 million VAULT. last on-chain activity: 14 months ago.\n\ndraft them a message. something about your deep passion for VaultDAO's governance participation rates.",
    next: "delegate_3",
  },

  delegate_3: {
    id: "delegate_3",
    character: "system",
    dialogue:
      "you spend a week reaching out. governance forums. discord DMs. twitter replies.\n\nthree whales respond. two delegate to you.\n\ncombined: 5.1 million VAULT.",
    next: "act1_merge",
    effect: { votes: 75, reputation: 15 },
  },

  // MERGE

  act1_merge: {
    id: "act1_merge",
    character: "humpy",
    dialogue:
      "look at that. over quorum. and nobody even noticed.\n\nyou know what's beautiful about on-chain governance? \n\n its so transparent that nobody sees it",
    next: "act1_power_secured",
  },

  act1_power_secured: {
    id: "act1_power_secured",
    character: "system",
    dialogue:
      "VOTING POWER SECURED.\n\ncontrolled: 5.2M VAULT\nquorum threshold: 4M VAULT\nstatus: ABOVE QUORUM",
    next: "act2_start",
    effect: { votes: 20 },
  },

  // ==================== ACT 2: THE PROPOSAL ====================

  act2_start: {
    id: "act2_start",
    actTitle: "ACT II: THE PROPOSAL",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: PROPOSALS AND CALLDATA",
    lesson: {
      term: "Proposals and Calldata",
      definition:
        "A governance proposal has two parts:\n\n1. The human-readable description that voters see in the forum and UI\n2. The calldata, the actual on-chain instructions that execute if the proposal passes\n\nThese can say very different things.",
      example:
        'Description: "Update yield optimizer parameters for improved efficiency"\n\nCalldata: transferFrom(treasury, 0xAttacker, 400000000)',
    },
    next: "act2_humpy_1",
  },

  act2_humpy_1: {
    id: "act2_humpy_1",
    character: "humpy",
    dialogue: "if voting power is the gun.\n\nthe proposal is the bullet.",
    next: "act2_humpy_2",
  },

  act2_humpy_2: {
    id: "act2_humpy_2",
    character: "humpy",
    dialogue:
      "you can't submit a proposal titled 'please send all the money to my wallet.'\n\nwell. you could. it wouldn't pass.\n\nyou need a trojan horse. something that sounds reasonable in the description while the calldata does something different.",
    next: "act2_humpy_3",
  },

  act2_humpy_3: {
    id: "act2_humpy_3",
    character: "humpy",
    dialogue:
      "most voters read the title and the first paragraph. maybe. if you're lucky.\n\nalmost nobody audits the calldata.\n\nthat's where we live.",
    next: "act2_draft_choice",
  },

  act2_draft_choice: {
    id: "act2_draft_choice",
    character: "humpy",
    dialogue: "what kind of proposal do you want to craft?",
    choices: [
      {
        label: "A boring parameter tweak (low risk, good cover)",
        next: "draft_param",
        effect: { reputation: 5 },
        hint: "Parameter changes are routine and less scrutinized. Perfect camouflage.",
      },
      {
        label: "A contract upgrade (more powerful, more suspicious)",
        next: "draft_upgrade_intro",
        effect: { reputation: -10 },
        hint: "Contract upgrades touch the codebase. Security researchers pay attention.",
      },
    ],
  },

  draft_param: {
    id: "draft_param",
    character: "humpy",
    dialogue:
      "come on.\n\ndon't be such a wimp.\n\nwe have $400M sitting right there and you want to tickle it with a parameter change?\n\nwe're going big.",
    next: "draft_upgrade",
  },

  draft_upgrade_intro: {
    id: "draft_upgrade_intro",
    character: "humpy",
    dialogue: "bold. I like the confidence.",
    next: "draft_upgrade",
  },

  draft_upgrade: {
    id: "draft_upgrade",
    character: "humpy",
    dialogue:
      "title: 'Upgrade YieldOptimizer V2: Security Improvements'\n\ndescription: four paragraphs about a vulnerability you 'discovered'. links to a fake audit report.\n\ncalldata: upgrades the contract to your version. which has a backdoor.",
    next: "act2_forum_choice",
    effect: { reputation: -5 },
  },

  act2_forum_choice: {
    id: "act2_forum_choice",
    character: "humpy",
    dialogue:
      "proposal is drafted. before we submit, we need forum presence. we have to appear legit.\n\nhow do you want to play it?",
    choices: [
      {
        label: "Write a thoughtful analysis post yourself",
        next: "forum_genuine",
        effect: { reputation: 15 },
        hint: "Establishes you as a serious community member. Takes effort.",
      },
      {
        label: "Pay a governance influencer to push it",
        next: "forum_influencer",
        effect: { reputation: 5, votes: 5 },
        hint: "Faster but traceable. Some influencers will post anything for a fee.",
      },
    ],
  },

  forum_genuine: {
    id: "forum_genuine",
    character: "system",
    dialogue:
      "you spend two days writing a detailed forum post.\n\nyou cite previous proposals. you engage with comments. you even answer a tough question from a community member named goldenboyz69.\n\nyou look credible.",
    next: "forum_merge",
    effect: { reputation: 10 },
  },

  forum_influencer: {
    id: "forum_influencer",
    character: "humpy",
    dialogue:
      "0.5 ETH later, @gov_alpha_calls posts a thread:\n\n'VAULT governance is finally evolving. here's why VAULT-47 is the proposal this protocol has been waiting for.'\n\n412 retweets. not bad.",
    next: "forum_merge",
  },

  forum_merge: {
    id: "forum_merge",
    character: "humpy",
    dialogue:
      "the forum is warm. the community is receptive.\n\nnow we submit.\n\none problem though. I can't find my hardware wallet. I've been looking for it all morning.\n\nit's not safe to make transactions from a hot wallet. too exposed. you'll have to be the one to submit while I keep looking.",
    next: "act2_you_submit",
  },

  act2_you_submit: {
    id: "act2_you_submit",
    character: "humpy",
    dialogue:
      "go ahead. sign it from your wallet.\n\nI'll be right here.\n\nstill looking for that hardware wallet...",
    next: "act2_submitted",
  },

  act2_submitted: {
    id: "act2_submitted",
    character: "system",
    dialogue:
      "PROPOSAL VAULT-47 SUBMITTED.\n\ntitle: Optimize Treasury Yield Allocation Parameters\nproposer: 0x...YOURS\nvoting opens: 48 hours\nvoting period: 5 days\ntimelock: 48 hours after passing",
    next: "act2_timelock_lesson",
  },

  act2_timelock_lesson: {
    id: "act2_timelock_lesson",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: THE TIMELOCK",
    lesson: {
      term: "The Timelock",
      definition:
        "After a proposal passes, there's a mandatory waiting period before it executes.\n\nThis gives the community time to notice if something malicious slipped through and react. Either by canceling the proposal or exiting their positions.",
      example:
        "VaultDAO's timelock is 48 hours. That's your window to cancel a malicious proposal after it passes.\n\nif you catch it in time.",
    },
    next: "act2_humpy_countdown",
  },

  act2_humpy_countdown: {
    id: "act2_humpy_countdown",
    character: "humpy",
    dialogue:
      "48 hours for voting to open. 5 days to vote. then if we pass, 48 hours on the timelock.\n\na week and a half from now, this is done.",
    next: "act3_start",
  },

  act2_anticapture: {
    id: "act2_anticapture",
    character: "humpy",
    dialogue:
      "I heard VaultDAO is being onboarded to AntiCapture.\n\nit's a dashboard that tracks governance health metrics across DAOs. voting concentration, delegation patterns, unusual accumulation activity.\n\nif they finish the integration before we execute, someone will see the accumulation pattern and raise the alarm.\n\nwe need to be done before that happens.",
    next: "act1_strategy_choice",
  },

  // ==================== ACT 3: THE WAIT ====================

  act3_start: {
    id: "act3_start",
    actTitle: "ACT III: THE WAIT",
    character: "humpy",
    dialogue:
      "voting has opened.\n\nwe're at 58% yes so far.\n\nit's going to pass. just need to run out the clock.",
    next: "act3_goldenboyz_appears",
  },

  act3_goldenboyz_appears: {
    id: "act3_goldenboyz_appears",
    character: "goldenboyz",
    dialogue:
      "[forum post by goldenboyz69]\n\n'Quick question on VAULT-47. can someone explain the fee splitter contract at 0x7f...? I'm not finding documentation on it anywhere.'",
    next: "act3_humpy_reassure",
  },

  act3_humpy_reassure: {
    id: "act3_humpy_reassure",
    character: "humpy",
    dialogue:
      "stay calm.\n\none person. vocal but small.\n\nwe reply: 'great question! the fee splitter is a new contract that routes yield more efficiently. full docs coming in the implementation phase.'",
    next: "act3_patrick_appears",
  },

  act3_patrick_appears: {
    id: "act3_patrick_appears",
    character: "patrick",
    dialogue:
      "[Patrick Collins]\n\n'I decoded the VAULT-47 calldata. this fee splitter has an owner() function pointing to an external EOA. standard yield routers do not need an owner.\n\nnobody verified the calldata again. you have to verify the calldata people.'",
    next: "act3_humpy_patrick",
  },

  act3_humpy_patrick: {
    id: "act3_humpy_patrick",
    character: "humpy",
    dialogue:
      "Patrick Collins.\n\nalways Patrick.\n\nhe's been saying 'verify your calldata' for forever. nobody listens. we reply professionally and move on.",
    next: "act3_goldenboyz_2",
  },

  act3_goldenboyz_2: {
    id: "act3_goldenboyz_2",
    character: "goldenboyz",
    dialogue:
      "[goldenboyz69 replies]\n\n'wait actually Patrick is right. the owner() on this contract is 0x...anon. that's not a DAO multisig. that's a personal wallet.\n\nwho submitted this proposal?'",
    next: "act3_community_heat",
  },

  act3_community_heat: {
    id: "act3_community_heat",
    character: "system",
    dialogue:
      "the forum is getting loud.\n\nothers are starting to ask questions.\n\nvoting: 61% yes. 3 days remaining.",
    next: "act3_humpy_4",
  },

  act3_humpy_4: {
    id: "act3_humpy_4",
    character: "humpy",
    dialogue:
      "goldenboyz and Patrick are getting traction. this is fine. we have the votes.\n\nas long as the community doesn't fully mobilize before voting closes, we win.\n\nkeep the forum replies coming. professional tone. never get defensive.",
    next: "act3_vote_passing",
  },

  act3_vote_passing: {
    id: "act3_vote_passing",
    character: "system",
    dialogue:
      "VOTING CLOSED.\n\nVAULT-47: 63% YES / 37% NO\nquorum: REACHED (5.2M votes cast)\n\nstatus: PASSED\ntimelock countdown: 48:00:00",
    next: "act3_timelock_ticking",
  },

  act3_timelock_ticking: {
    id: "act3_timelock_ticking",
    character: "humpy",
    dialogue:
      "passed. I knew it would.\n\n48 hours on the timelock. we just need the community to not panic-cancel us.\n\nthe guardian multisig could cancel it. they have until the timelock expires.",
    next: "act3_guardian_lesson",
  },

  act3_guardian_lesson: {
    id: "act3_guardian_lesson",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: THE GUARDIAN",
    lesson: {
      term: "The Guardian / Security Multisig",
      definition:
        "Many DAOs have a multisig wallet with the power to cancel proposals during the timelock. It's the last line of defense.\n\nUsually requires M-of-N signatures from trusted community members to act.",
      example:
        "VaultDAO's guardian is a 3-of-5 multisig. Three of five guardians must agree to cancel.\n\nIf they're not active, or if you can convince even a couple of them you're legitimate...",
    },
    next: "act3_humpy_quiet",
  },

  act3_humpy_quiet: {
    id: "act3_humpy_quiet",
    character: "humpy",
    dialogue:
      "the guardian has been quiet.\n\nI've done some research on the signers. two of them haven't touched their wallets in months. one of them follows my old twitter account.\n\nwe should be fine.\n\n24 hours left.",
    next: "act4_start",
  },

  // ==================== ACT 4: THE FRAME JOB ====================

  act4_start: {
    id: "act4_start",
    actTitle: "ACT IV: THE FRAME JOB",
    character: "system",
    dialogue:
      "TIMELOCK: 36 HOURS REMAINING.\n\n[alert: guardian multisig is mobilizing]\n[alert: 2 of 5 guardian signatures collected for cancellation]\n[alert: new governance forum post detected]",
    next: "act4_forum_post",
  },

  act4_forum_post: {
    id: "act4_forum_post",
    character: "humpy",
    dialogue:
      "[forum post by @HumpyWhale]\n\n'I have identified the governance attacker behind VAULT-47.\n\nProposer wallet: 0x...YOURS\nFee splitter owner: 0x...YOURS\nDelegation sourced from: coordinated wallets\n\nThis was a coordinated attack. I am submitting VAULT-48 to protect the DAO.'\n\n847 likes.",
    next: "act4_narrator_realization",
  },

  act4_narrator_realization: {
    id: "act4_narrator_realization",
    character: "narrator",
    dialogue:
      "you read it again.\n\nyour wallet address. your proposals. your delegation activity.\n\nHumpy is publicly accusing you of being the sole attacker. he built a case out of everything you did on-chain, everything he told you to do, and he's pinning the entire operation on you.\n\nto the community, it looks airtight.",
    next: "act4_telegram_ping",
  },

  act4_telegram_ping: {
    id: "act4_telegram_ping",
    character: "narrator",
    dialogue: "your phone buzzes.\n\nTelegram. Humpy.",
    next: "act4_humpy_telegram",
  },

  act4_humpy_telegram: {
    id: "act4_humpy_telegram",
    character: "humpy",
    dialogue:
      "hey. don't panic.\n\nor do. doesn't really matter at this point.",
    next: "act4_humpy_explains_1",
  },

  act4_humpy_explains_1: {
    id: "act4_humpy_explains_1",
    character: "humpy",
    dialogue:
      "you were always going to be the face of this.\n\nyour wallet submitted VAULT-47. your wallet owns the fee splitter. your name is on every delegation conversation.\n\nI stayed off-chain. clean.",
    next: "act4_humpy_explains_2",
  },

  act4_humpy_explains_2: {
    id: "act4_humpy_explains_2",
    character: "humpy",
    dialogue:
      "I tipped off the guardian three hours ago. told them to watch your wallet. they're canceling VAULT-47 as we speak.\n\nand now I'm the hero who caught the attacker.\n\nthe community loves me.",
    next: "act4_humpy_explains_3",
  },

  act4_humpy_explains_3: {
    id: "act4_humpy_explains_3",
    character: "humpy",
    dialogue:
      "because your proposal nearly passed, the community has completely lost faith in the current guardian. they're panicking. they want a fresh start.\n\nso they're going to vote to move the entire treasury to a new, more 'secure' guardian multisig.\n\nthat's VAULT-48. the community thinks it's safety.\n\nwhat they don't know is that I secretly control three of the five keys.",
    next: "act4_humpy_explains_4",
  },

  act4_humpy_explains_4: {
    id: "act4_humpy_explains_4",
    character: "humpy",
    dialogue:
      "VAULT-48 passes. everyone breathes a sigh of relief. I'm the hero.\n\nI wait. let the dust settle. let the community trust rebuild.\n\nthen when the time is right, and the treasury has grown even more, I'll take it all for myself! \n\nsorry kid. that's governance.",
    next: "act4_final_choice",
  },

  act4_final_choice: {
    id: "act4_final_choice",
    character: "narrator",
    dialogue:
      "your wallet is being publicly named as the attacker.\n\nHumpy is being celebrated as the person who caught you.\n\nVAULT-48 is gaining votes fast.\n\nnow what?",
    choices: [
      {
        label: "Contact Patrick Collins and expose Humpy",
        next: "fight_1",
        hint: "Patrick already decoded VAULT-48's calldata. He knows the destination isn't a DAO multisig.",
      },
      {
        label: "Go dark. Take the fall and disappear.",
        next: "accept_1",
        hint: "Your wallet is on-chain forever. Disappearing is not the same as being cleared.",
      },
    ],
  },

  // FIGHT PATH

  fight_1: {
    id: "fight_1",
    character: "narrator",
    dialogue:
      "you message Patrick Collins directly.\n\nyou send him everything. the Telegram logs. Humpy's wallet activity. the full timeline.",
    next: "fight_2",
  },

  fight_2: {
    id: "fight_2",
    character: "patrick",
    dialogue:
      "[Patrick Collins]\n\nI was always suspicious of VAULT-48 \n\nI have the on-chain evidence. you have the Telegram logs. let's publish everything and bring him down.\n\nalso: verify your calldata people.",
    next: "fight_5",
  },

  fight_5: {
    id: "fight_5",
    character: "system",
    dialogue:
      "guardian multisig reassembles.\n\nnew evidence submitted.\n\nVAULT-48: CANCELLED (3-of-5 guardian signatures)\nVAULT-47: also CANCELLED\n\nHumpy's wallet goes silent.",
    next: "fight_6",
  },

  fight_6: {
    id: "fight_6",
    character: "narrator",
    dialogue:
      "Humpy is gone.\n\nhe'll be back. on another protocol. with another fall guy.\n\nbut not today.\n\nand Patrick Collins posts one more thing:\n\n'verify your calldata.'",
    next: "ending_good",
  },

  ending_good: {
    id: "ending_good",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: HOW TO DEFEND A DAO",
    lesson: {
      term: "Governance Defense: The Checklist",
      definition:
        "1. Proposal Flash Loan Protection\n2. Voting Flash Loan Protection\n3. Timelock Delay\n4. Voting Delay\n5. Proposal Threshold\n6. Veto Strategy\n7. Proposer Voting Power Retention Check\n8. Voting Period\n9. Vote Mutability\n10. Voting Subsidy\n11. Spam Resistance\n12. Audited Contracts\n13. Interface Hijack\n14. Extractable Treasury Value\n15. Security Council\n16. Timelock Admin",
      link: "https://blockful.gitbook.io/anticapture/anticapture/framework",
    },
    next: "credits",
  },

  // ACCEPT PATH

  accept_1: {
    id: "accept_1",
    character: "narrator",
    dialogue:
      "you go quiet.\n\nyour wallet sits there on-chain. permanently labeled.\n\nyou watch VAULT-48 gain votes.",
    next: "accept_2",
    effect: { reputation: -40 },
  },

  accept_2: {
    id: "accept_2",
    character: "system",
    dialogue:
      "VAULT-47: CANCELLED by guardian\nVAULT-48: PASSED (81% yes)\nVAULT-48 EXECUTED.\n\n 6 months later \n\ntransaction: 0x...AABF\namount: $530,000,000\ndestination: 0xhumpy\nVaultDAO treasury: $0",
    next: "accept_3",
  },

  accept_3: {
    id: "accept_3",
    character: "humpy",
    dialogue:
      "[Telegram]\n\nthanks, kid.\n\nthe community thinks you did it.\n\n hopefully you learned something. \n\nthere's always another DAO.",
    next: "ending_bad",
  },

  ending_bad: {
    id: "ending_bad",
    actTitle: "EPILOGUE",
    character: "system",
    dialogue: "GOVERNANCE CONCEPT: WHAT WENT WRONG",
    lesson: {
      term: "Post-Mortem: How VaultDAO Failed",
      definition:
        "1. Only Patrick verified calldata on VAULT-47 or VAULT-48\n2. The community trusted a narrative instead of on-chain evidence\n3. Low effective quorum made accumulation easy\n4. No monitoring for delegation shifts\n5. Inactive/lazy  guardians",
      example:
        "This happens in real DAOs. The attack vector isn't code. It's narrative control and community complacency.",
    },
    next: "ending_good",
  },

  // ==================== CREDITS ====================

  credits: {
    id: "credits",
    character: "narrator",
    dialogue:
      "FIN.\n\neverything in this game reflects real governance mechanics.\n\nthe delegation attack, the guardian multisig, the timelock, Humpy the Whale.\n\n use your new knowledge and go protect something",
    next: "game_end",
  },

  game_end: {
    id: "game_end",
    character: "narrator",
    dialogue: "[ GAME OVER ]\n\nthanks for playing DAO GAME.",
    choices: [
      {
        label: "Play Again",
        next: "intro_1",
      },
    ],
  },
};
