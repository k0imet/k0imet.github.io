---
date: "2020-10-29T00:00:00Z"
title: RaziCTF 2020 Writeups
tags : ["OSINT", "Forensics", "Cryptography", "Steganography"]
---

---

# RaziCTF-Writeups

![scoreboard.png](/img/razictf/Scoreboard.png)


## Holloway

# Holloway

> OSINT

## Challenge

![screenshot1.png](/img/razictf/HollowayDec.png)


## Solution

following the provided challenge link

[https://dikelaw535.wixsite.com/holloway](https://dikelaw535.wixsite.com/holloway)
we are met with the following web page

![screenshot2.png](/img/razictf/Wixsite.png)

that ain't good :/ no Secrets yet ... hh
but again maybe it was there but deleted :)
checking through using Wayback Machine we get something

![screenshot3.png](/img/razictf/Waybackurl.png)
a twitter handle @juliusKingsleyy 
following the link 

[https://twitter.com/juliusKingsleyy](https://twitter.com/juliusKingsleyy)

we are met with the following page, just a weird looking tweet 

![screenshot4.png](/img/razictf/JuliusKingsleyy.png)

aha! 

the challenge name is a hint for Twitter Steganography technique. 
we decode the tweet using the site
holloway.nz/steg/

and there we get our flag 

![screenshot5.png](/img/razictf/holloway.png)

> Flag : RaziCTF{secret1337}

# A rEal gAME
> Crypto

## Challenge

![screenshot1.png](/img/razictf/ChallengeDesc.png)


## Solution

the challenge description has 2 provided hints ```fence and bifid```

![screenshot3.png](/img/razictf/Cipher.png)

provided the cipher we try decoding it with "Rail Fence Cipher" ...
Then decode the Results with "Bifid Cipher"
with the provided key "RaziCTF"

![screenshot4.png](/img/razictf/RailFenceDecoder.png)


![screenshot5.png](/img/razictf/BifidDecode.png)

and there we get our flag

# Ladder

> Crypto

## Challenge

![screenshot1.png](/img/razictf/Desc.png)


## Solution
opening the file in Cyberchef 
[CyberChef](gchq.github.io/CyberChef/)

and decoding through 
base32>>base58>>base62>>base64>>base85 
we get the flag
![file.png](/img/razictf/CyberChef.png)

# Culture
Steganography

## Challenge

![screenshot1.png](/img/razictf/Culture.png)


## Solution
we are provided with a challenge png file
![screenshot2.png](/img/razictf/enc.png)
since it's a png i decided to check through zsteg 
and we get our flag
![screenshot5.png](/img/razictf/flag.png)

and there we get our flag
