// ==UserScript==
// @name         Cool Script!
// @namespace    http://tampermonkey.net/crunkInTheHouse
// @version      0.1
// @description  Do you like manga?
// @author       CrunkInTheHouse
// @include      https://www.webtoons.com/*
// @icon         https://www.google.com/s2/favicons?domain=userscript.zone
// @noframes
// ==/UserScript==

/* eslint-disable */

(function() {
    'use strict';

  // @match        https://www.webtoons.com/member/join?loginType=EMAIL
  // @include      https://www.webtoons.com/*
  // @include      https://global.apis.naver.com/*
  // @grant        --u--nsafeWindow
  // @unwrapped


    console.log = function (message) {
        if (false) {
            console.dir(message)
        }
    }

    const action = {
        createAccounts: "createAccounts",
        upVote: "upVote",
    }

    const storageKeys = {
        whichAction: "whichAction",
        isRunning: "isRunning",

        emailName: "emailName",
        pass: "pass",
        nickname: "nickname",

        startAtEmail: "startAtEmail",
        numEmails: "numEmails",

        emailIndex: "emailIndex",
        botIndex: "botIndex",
        pageIndex: "pageIndex",
        isSwitchAccounts: "isSwitchAccounts"

    }


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////           Emailed (Shared configs                /////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // "Base" email used for eveything.
    // It's a "base" email b/c all bots will look like "biggerpenisthanyoulol+0@gmail.com" , 0=some number
    let email = "biggerpenisthanyoulol@outlook.com"
    // let email = "chrisyestheechris@outlook.com"
    let pw = "extrem3Pass!"

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////        Create Account Configs             ////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let nickname = "Super_geranimo_"
    let startAtEmail = 20
    let numEmails = 50

    // FOR YOUR FIRST TIME CREATING BOTS THE "startAtEmail" VARIABLE MUST BE 0
    // Fill in your password and "base" nickname and "base" email
    // Fill in startAtEmail=<the bot 'number' you want to make>, this is for when you want to make make more bots next week or w/e
    // numEmails=<the number of new bots to make>

    // You don't have to worry about this, but here is what is happening if you care:
    // If your configs are this:
    //      email = "geranimosexualmail@gmail.com"
    //      pw = "extrem3Pass!"
    //      nickname = "geranimoSexual_"
    //      startAtEmail = 11
    //      numEmails = 3
    //
    // Then this will auto create these
    //  email  /  username
    //  geranimosexualmail+11@gmail.com / geranimoSexual_11,
    //  geranimosexualmail+12@gmail.com / geranimoSexual_12,
    //  geranimosexualmail+13@gmail.com / geranimoSexual_13
    //
    //  Password is "extrem3Pass!" for every account (no quotes). Don't worry about it, but the script will use this password to log in



  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////        Upvote Configs                     ////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // numUpVotes must be equal to or less than the number of your 'bots'
    // Each page gets x "numUpVotes" (eg 10 upvotes to each page)
    let numUpVotes = 70
    let startAtAccount = 20
    let allPagesToUpVote = [ "https://www.webtoons.com/en/challenge/austinxmatty/title/viewer?title_no=663995&episode_no=1",
                            // "https://www.webtoons.com/en/sports/the-boxer/ep-68-family/viewer?title_no=2027&episode_no=73",
                            //  "https://www.webtoons.com/en/sports/the-boxer/ep-67-blood/viewer?title_no=2027&episode_no=72",
                            "https://www.webtoons.com/en/challenge/austinxmatty/1/viewer?title_no=663995&episode_no=2"
                            ]
    let restPerPage = 2     //In seconds. Bot will wait x seconds until it moves onto the next page. Could be 0
    let restPerAccount =  3 //In seconds. Bot will wait x seconds until it logins into next bot. Could be 0

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.cookie = "needCOPPA=false; domain=.webtoons.com; path=/"
    let whichAction = sessionStorage.getItem("whichAction")
    let isRunning = sessionStorage.getItem("isRunning")


    var script = document.createElement('script');
    script.innerHTML = `
      function sayingHi() {
          console.log("HELLO MOTHER FUCKER!")
          document.getElementById("btnLogin").click()
      }
      async function doLogin2() {

      }

      function sleep2(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }

    `
    document.getElementsByTagName('head')[0].appendChild(script)

    window.addEventListener('load', (event) => {
      if (sessionStorage.getItem("isRunning") != 'true') {
          var style = document.createElement('style');
          // style.type = 'text/css';
          style.innerHTML = `.cssClass { color: #F00;
              display: inline-block;
              width: 104px;
              height: 33px;
              border-radius: 17px;
              background: #2f2f2f;
              line-height: 35px;
              text-align: center;
              vertical-align: top;
              font-size: 14px;
              font-family: hind_m,simhei,verdana,Helvetica,sans-serif;
              color: #fff;
              margin-left: 12px;
              margin-top: -3px;
          }`;
          document.getElementsByTagName('head')[0].appendChild(style)
          let buttonToFunction = [kickOffAccountMaking, kickOffUpVoting]
          let buttonToNames = ["Make Accounts", "Send Likes"]
          console.log("ADDING BUTONS??!")
          for (let i=0; i< buttonToFunction.length; i++) {
              let btn = document.createElement("button")
              btn.innerHTML = buttonToNames[i]
              btn.classList.add("cssClass")
              btn.addEventListener("click", buttonToFunction[i])
              btn.addEventListener("click", renderTip)

              let header = document.getElementById("header")
              if (header && header.getElementsByClassName("lk_creators")[0]) {
                  header.getElementsByClassName("lk_creators")[0].appendChild(btn)
              } else if ( document.getElementsByClassName('logo')[0]) {
                  document.getElementsByClassName('logo')[0].appendChild(btn)
              }
          }
      }
    })

    window.addEventListener('load', (event) => {

        console.log("Loaded - isRunning ", isRunning);

        let endAtEmail = startAtEmail + numEmails
        let emailIndex = parseInt(sessionStorage.getItem("emailIndex"))

        if (sessionStorage.getItem("isRunning") != 'true' ) {
          // console.log("Loaded - AccountMaking - startAtEmail=", startAtEmail)
          // console.log("Loaded - AccountMaking - emailIndex=", emailIndex)
          // console.log("Loaded - AccountMaking - endAtEmail=", endAtEmail)
          console.log("Loaded - Upvote - numUpVotes=", numUpVotes)
          console.log("Loaded - Upvote - restPerPage=", restPerPage)
          console.log("Loaded - Upvote - restPerAccount=", restPerAccount)
        }

        if (emailIndex > endAtEmail) {
            sessionStorage.setItem("isRunning",false)
            sessionStorage.setItem("emailIndex", 0)
            console.log("Loaded - Ending it 1")
        }

        if (isRunning == "true") {
            console.log("Loaded - IN RUN!!!!!!")
            run()
        }
      });

    console.log("adding cool functions....")

  //   unsafeWindow.__kickOffAccountMaking = kickOffAccountMaking
  //   unsafeWindow.__kickOffUpVoting = kickOffUpVoting


  //   unsafeWindow.__commandUpVoting = commandUpVoting
  //   unsafeWindow.__doLogin = doLogin
  //   unsafeWindow.__doLogoutAndRefresh = doLogoutAndRefresh
  //   unsafeWindow.__doUpvote = doUpvote


    async function run() {
        console.log("---------- COMMAND -------------")
        if (whichAction == action.createAccounts) {
            await loopCreateAccounts()
        }

        if (whichAction == action.upVote) {
            console.log("Upvoting ... ")
            await commandUpVoting()
        }
        console.log("---------- OUT -------------")
    }









   function renderTip() {
    var style = document.createElement('style');
    // style.type = 'text/css';
    style.innerHTML = `.cssText {
        color: black;
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 30px;
        background: yellow;
    }`;
    document.getElementsByTagName('head')[0].appendChild(style)
    let myDiv = document.createElement("div")
    myDiv.innerText = "Sending likes, make sure to run the clicking thing via F3"
    myDiv.classList.add("cssText")
    let navEle = document.getElementsByClassName("NE=a:gnb")[0]
    if (navEle) {
        navEle.parentElement.appendChild(myDiv)
    } else if (document.getElementById("header")) {
        document.getElementById("header").appendChild(myDiv)
    }




   }

    function kickOffAccountMaking(){

        if (isLogged() ) {
            alert("Log out then try again");
            return
        }

        whichAction = sessionStorage.setItem("whichAction" , action.createAccounts)
        sessionStorage.setItem("emailIndex" , startAtEmail)
        sessionStorage.setItem("isRunning" , true)
        console.log("kick - emailIndeex sessionStorage=", sessionStorage.getItem("emailIndex"))
        console.log("kick - Making accounts...")
        console.log("kick - Starting account at '+", startAtEmail, "'")
        console.log("kick - Ending account at   '+", startAtEmail + numEmails, "'")
        loopCreateAccounts()
    }


    async function loopCreateAccounts() {

        let endAtEmail = startAtEmail + numEmails
        console.log("loop - startAtEmail=", startAtEmail)
        console.log("loop - endAtEmail=", endAtEmail)
        console.log("loop - storage.get(emailIndex)=",  parseInt(sessionStorage.getItem("emailIndex") ))

        const getEmailIndex = () => { return parseInt(sessionStorage.getItem("emailIndex")); }
        const incrementEmailIndex = () => { sessionStorage.setItem("emailIndex",  parseInt(sessionStorage.getItem("emailIndex")) + 1) }

        console.log('--------- ', getEmailIndex(), ' --------')
        console.log("loop are we gonna run?" , sessionStorage.getItem("isRunning") === "true" && getEmailIndex() <= endAtEmail && getEmailIndex() != null)
        console.log("loop are we gonna run 1?" , sessionStorage.getItem("isRunning") === "true")
        console.log("loop are we gonna run 2?" , getEmailIndex() <= endAtEmail)
        console.log("loop are we gonna run 3?" , getEmailIndex() != null)
        try {
            while (sessionStorage.getItem("isRunning") === "true" && getEmailIndex() <= endAtEmail && getEmailIndex() != null) {
                console.log("loop - going into creating ")
                await createNextAccount()

                if (getEmailIndex() > endAtEmail) {
                    sessionStorage.setItem("isRunning",false)
                    console.log("Ending it 2")
                }
                console.log("loop - incrementing ", getEmailIndex())
                incrementEmailIndex();
            }
        } catch(e) {
            console.log("Catch, something went wrong ", e)
        }
        await sleep(500)
    }

    async function createNextAccount() {
        console.log('Creating - creating')
        document.cookie = "needCOPPA=false; domain=.webtoons.com"
        if (window.location.href != 'https://www.webtoons.com/member/join?loginType=EMAIL') {
            console.log('Creating - redirect 1 - ', window.location.href)
            window.location.href = 'https://www.webtoons.com/member/join?loginType=EMAIL';
            await doReadyCheck()
            await sleep(3000)
            console.log("HAS REDIRECTED")
        } else {

            console.log('Creating - filling form')
            // pw & nickname is from the top/configs
            let tempEmail = email.split("@")
            let newEmail = tempEmail[0] + "+" + sessionStorage.getItem("emailIndex") + "@" + tempEmail[1]

            let emailInput = document.getElementById("email")
            let pw1Input = document.getElementById("pw")
            let pw2Input = document.getElementById("retype_pw")
            let nicknameInput = document.getElementById("nickname")

            console.log("emailInput.value=", emailInput.value, "pw1Input.value=",pw1Input.value, "pw2Input.value=",pw2Input.value, "nicknameInput.value=",nicknameInput.value )

            emailInput.value = newEmail
            await sleep(100)
            pw1Input.value = pw
            await sleep(100)
            pw2Input.value = pw
            await sleep(100)
            nicknameInput.value =  nickname + sessionStorage.getItem("emailIndex")

            let event7 = document.createEvent('Event');
            event7.initEvent('blur', true, true);
            document.getElementById("pw").dispatchEvent(event7)

            console.log('Creating - filling form 4.3')
            await sleep(500)

            console.log('Creating - filling form 5')
            let event8 = document.createEvent('Event');
            event8.initEvent('blur', true, true);
            document.getElementById("retype_pw").dispatchEvent(event8)

            console.log("Creating - click!!!")

            await sleep(500)
            document.getElementsByClassName("NPI=a:signup")[0].click()
            console.log("Creating - Waiting 1 seconds")
            await sleep(1000)

            // "refresh"
            console.log("refreshing")

           window.location.href = 'https://www.webtoons.com/member/join?loginType=EMAIL';
        }
    }












    async function kickOffUpVoting(){
        console.log("kickOffUpVoting - Staring the upvotes...")

        whichAction = sessionStorage.setItem("whichAction" , action.upVote)
        sessionStorage.setItem("pageIndex" , 0)
        // sessionStorage.setItem("botIndex", 0 )
        sessionStorage.setItem("botIndex", startAtAccount )
        sessionStorage.setItem("isRunning" , true)
        sessionStorage.setItem("isSwitchAccounts_logout" , true)
        sessionStorage.setItem("isSwitchAccounts_login", true)

        console.log("kickOffUpVoting - Will send these many upvotes", numUpVotes)
        console.log("kickOffUpVoting - To these pages: ", allPagesToUpVote)
        // location.reload()
        await sleep(3000)
        commandUpVoting()
    }


    async function commandUpVoting() {
        // once the script logs out it has to refresh the page, thus these 2 if's
        document.cookie = "needCOPPA=false; domain=.webtoons.com"
        // console.log("commandUpVoting - isSwitchAccounts_logout=", sessionStorage.getItem("isSwitchAccounts_logout"))
        // console.log("commandUpVoting - isSwitchAccounts_login=", sessionStorage.getItem("isSwitchAccounts_login"))
        await doReadyCheck()
        if (sessionStorage.getItem("isSwitchAccounts_logout") == "true") {
            console.log("commandUpVoting - logging out")
            await sleep(2000)
            sessionStorage.setItem("isSwitchAccounts_logout", false)
            sessionStorage.setItem("isSwitchAccounts_login", true)
            return doLogoutAndGo2Home()
        }

        if (sessionStorage.getItem("isSwitchAccounts_login") == "true" && !isLogged()) {
            console.log("commandUpVoting - log in")
            sessionStorage.setItem("isSwitchAccounts_login", false)
            await sleep(300)
            return doLogin()
        }

        console.log("commandUpVoting - botIndex: ", sessionStorage.getItem("botIndex"))
        console.log("commandUpVoting - pageIndex: ", sessionStorage.getItem("pageIndex") )

        //For each allPagesToUpVote, do ....
            await doReadyCheck()
            let pageIndex = () => { return parseInt(sessionStorage.getItem("pageIndex")) }

            let pageToUpVote = allPagesToUpVote[pageIndex()]
            await goToPage(pageToUpVote)
            await doUpvote(pageToUpVote)

            incrementPageIndex()
            console.log("commandUpVoting - aftr pageIndex: ", pageIndex())
            await sleep(restPerPage * 1000)

        // while (not numUpvotes completed)
            console.log("commandUpVoting - botIndex ", parseInt(sessionStorage.getItem("botIndex")) )
            console.log("commandUpVoting - numUpVotes ", numUpVotes)
            console.log("commandUpVoting - pageIndex() ", pageIndex() )
            console.log("commandUpVoting - allPagesToUpVote.length ", allPagesToUpVote.length )
            if (parseInt(sessionStorage.getItem("botIndex")) + 1 > numUpVotes && pageIndex() >= allPagesToUpVote.length  ) {
                console.log("commandUpVoting - Done upvoting.")
                console.log("commandUpVoting - Sent these many upvotes", numUpVotes)
                console.log("commandUpVoting - To these pages: ", allPagesToUpVote)
                sessionStorage.setItem("isRunning" , false)

                console.log("commandUpVoting - MAX DONE !!!!! " )
                console.log("commandUpVoting - MAX DONE !!!!! " )
                console.log("commandUpVoting - MAX DONE !!!!! " )
                console.log("commandUpVoting - MAX DONE !!!!! " )
                console.log("commandUpVoting - MAX DONE !!!!! " )
                console.log("commandUpVoting - MAX DONE !!!!! " )
                alert("Done with upvoting thing")
                return
            }


            console.log("commandUpVoting - wtf 1 " )
        if (pageIndex() >= allPagesToUpVote.length) {
            console.log("commandUpVoting - going to next bot, previously", sessionStorage.getItem("botIndex"))
            console.log("commandUpVoting - pageIndex() + 1 ", pageIndex() + 1)
            console.log("commandUpVoting - allPagesToUpVote.length ", allPagesToUpVote.length)
            // sessionStorage.setItem("isSwitchAccounts" , true)
            sessionStorage.setItem("isSwitchAccounts_logout", true)
            sessionStorage.setItem("isSwitchAccounts_login", true)
            sessionStorage.setItem("pageIndex", 0)
            incrementBotIndex()
            console.log("commandUpVoting - sleeping for ", restPerAccount*1000)
            await sleep(restPerAccount * 1000)
            // return commandUpVoting();

        }
        console.log("commandUpVoting - wtf 2 " )
        return commandUpVoting()

    }

    async function doLogoutAndGo2Home() {

        await doReadyCheck()
        // document.cookie = "NEO_SES= ; path=/; domain=.webtoons.com; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        deleteAllCookies()
        await sleep(500)
        console.log("doLogoutAndRefresh - User is logged out")
        // location.reload()
        window.location.href = "https://www.webtoons.com/en/"


        return false;

    }

    async function goToPage(page) {
        await doReadyCheck()
        console.log("goToPage - Going to: ", page)
        if (!window.location.href.includes(page) && window.location.href.includes("www.webtoons.com")) {
            window.location.href = page
        }
    }

    async function doUpvote() {
        if (!isLogged()) {
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            console.log("doUpVote -USER IS NOT LOGGED IN ?!")
            return false
        } else {
            await doReadyCheck()
            await sleep(200)
            let like = document.getElementById("likeItButton")
            let subscribe = document.getElementById("footer_favorites")
            like.scrollIntoView()
            window.scrollBy(0,-150)
            await sleep(1000)
            let isLikeOn = like.getElementsByClassName("_btnLike")[0].classList.contains("on")
            let isSubbedOn = subscribe.classList.contains("on")

            if (!isLikeOn) {
                like.click()
                await sleep(250)
            }

            if (!isSubbedOn) {
                subscribe.click()
                await sleep(250)
            }

            await sleep(500)
        }
    }


        //   VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV      //
        //  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV     //
        // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV    //
        //    VVVVVVVVV                          VVVVVVVVV    //
        //      VVVVV                              VVVVV      //
        //       VVV                                VVV       //
        //        V                                  V        //

  //   function helloIt() {
  //       console.log("hello !!! ")
  //       console.log("hello !!! ")
  //       console.log("hello !!! ")
  //       console.log("hello !!! ")
  //   }

  //   function testHello() {
  //       window.__helloIt()
  //   }

  //   unsafeWindow.__helloIt = helloIt
  //   unsafeWindow.__testHello = testHello

    async function doLogin() {
        await doReadyCheck()
        console.log("Logging in")
        await sleep(500)

        if (isLogged()) {
            console.log("User is already logged!!! Nothing to do.")
            return
        }
        if ( document.getElementById("btnLogin")){
            console.log("Logging in - btnLogin")
            await sleep(500)

            const evt = new Event("click", {"view": window, "bubbles":true, "cancelable":false});

            // console.log("Logging in1")
            // const evt2 = new Event("mouseover", {"view": window, "bubbles":true, "cancelable":false});
            // const evt3 = new Event("mousedown", {"view": window, "bubbles":true, "cancelable":false});
            // const evt4 = new Event("mouseup", {"view": window, "bubbles":true, "cancelable":false});
            // const evt5 = new Event("mouseenter", {"view": window, "bubbles":true, "cancelable":false});
            // document.getElementById("btnLogin").dispatchEvent(evt5)
            // await sleep(500)
            // document.getElementById("btnLogin").dispatchEvent(evt2)
            // await sleep(500)
            // document.getElementById("btnLogin").dispatchEvent(evt3)
            // await sleep(500)
            // document.getElementById("btnLogin").dispatchEvent(evt4)
            await sleep(500)
            document.getElementById("btnLogin").dispatchEvent(evt)
            // await sleep(500)
          //   document.getElementById("btnLogin").click()
          //   let event = new UIEvent("click")
          //   document.getElementById("btnLogin").dispatchEvent(event)
          //   const evt = new Event("click", {"view": window, "bubbles":true, "cancelable":false});
          //   sayingHi()
        }
        else if (document.getElementById("likeItButton")) {
            console.log("Logging in - likeItButton")
            await sleep(1000)
            document.getElementById("likeItButton").click()
        }

        await sleep(1000)
        console.log("Logging in - filling out form...")

        let preEmail = email.split("@")
        let loginEmail = preEmail[0] + "+" + sessionStorage.getItem("botIndex") + "@" + preEmail[1]

        await sleep(100)
        document.getElementById("emailId").value = loginEmail
        await sleep(100)
        document.getElementById("password").value = pw
        await sleep(500)

        document.getElementsByClassName("NPI=a:email")[0].click()
        console.log("Logging in - CLICK!")
        await sleep(1000)
        return

    }













    function deleteAllCookies() {
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=; path=/; domain=.webtoons.com; expires = Thu, 01 Jan 1970 00:00:00 GMT";
          // document.cookie = "NEO_SES=; path=/; domain=.webtoons.com; expires = Thu, 01 Jan 1970 00:00:00 GMT";
      }
  }

    async function doReadyCheck() {
        // console.log("READY CHECKING")
        let i = 0
        while (document.readyState != "complete" && ( (i*1000) < 20000)) {
            console.log("No ready, document.readystate=", document.readyState, " - ", i)
            i++;
            await sleep(1000);
        }
        return
        // console.log("DONE! documnet.readyState: ", document.readyState)
    }


    function isLogged() {
        let token = document.cookie.split("; ").find(x => x.startsWith('NEO_SES'))
        if (token == null) {
            return false
        } else {
            return true
        }

    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function incrementBotIndex() {
        let cnt = parseInt(sessionStorage.getItem("botIndex"))
        sessionStorage.setItem("botIndex", cnt + 1)
    }

    function incrementPageIndex() {
        let cnt = parseInt(sessionStorage.getItem("pageIndex"))
        sessionStorage.setItem("pageIndex", cnt + 1)
    }


  })();