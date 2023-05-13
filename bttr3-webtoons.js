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
    const usernames = ["alphafox","amazingjazz","angrybird","applerider","aquawolf","aspiringcoder","autumndream","backpacker","badgerlover","beachcomber","beardboss","beautifulmind","bestbud","bigdreamer","birdwatcher","blackbelt","blackcat","bluesky","butterfly","californiagal","camerashy","candycane","captainamerica","carrottop","catlover","chasingdreams","cheesehead","cherryblossom","chessmaster","chicagolife","chocolateaddict","citysoul","climbinghigh","coffeeholic","collegekid","comicbooknerd","coolbreeze","cosmicdreamer","countrylife","crazydoglady","creativeforce","crimsonking","crossfitjunkie","crystalclear","dancingqueen","darkhorse","daydreamer","deepspace","desertflower","diamondgirl","divein","doglover","dragonfly","dreamchaser","dreamweaver","drummingirl","duskrunner","earlybird","eastcoast","electricguitar","emeraldgreen","endlessadventures","eternaloptimist","explorer","fairydust","fallenangel","familyman","fancyfeast","fastlane","featheredfriend","fieryred","fifthelement","fireball","firefly","fisherman","flamingo","flashback","floralprint","flowerchild","flyinghigh","forevergreen","fossilhunter","freebird","freedomfighter","freshstart","frontrow","funkyfresh","futuremillionaire","galacticexplorer","gardenlover","geekygirl","gemstone","ghosthunter","gingerbread","givingheart","glitterbomb","gogetter","goldcoast","goldenretriever","goodvibesonly","gratefulheart","greatgatsby","greeneyedgirl","guitarhero","harvestmoon","hawaiilife","heartbreaker","heavymetal","highfives","hiphoppin","honeybadger","horselover","hotchocolate","humblebeginnings","huntingseason","icequeen","imagination","infinitypool","innerpeace","inspiration","ironman","islandlife","ivorytower","jazzhands","OtakuOracle","MangaMaster","ChibiChampion","TsundereTitan","KawaiiKnight","SailorSenshi","ShinigamiShadow","ShoujoStar","MechaMaverick","KaijuKing","NarutoNinja","OnePiecePirate","TitanTamer","AlchemistAce","GhibliGuru","SpiritedSpirit","SenpaiSupreme","DeathNoteDiva","AttackOnOtaku","FullmetalFanatic","SaiyanScholar","JutsuJedi","ZanpakutoZealot","DragonBallDynamo","CosplayCrusader","TotoroSpirit","JellalFernandes","AstaWarrior","AkihiroSword","AkiraSoul","AllukaZoldyck","AsunaKnight","ByakuyaKuchiki","CielPhantomhive","ChikaFujiwara","DazaiOsamu","DekuHero","ErenYeager","ErzaScarlet","EdwardElric","GintokiSakata","GonFreecss","GrayFullbuster","GohanSSJ2","HikariYagami","HisokaMorow","HinataHyuga","HieiJagan","InuyashaDog","ItachiUchiha","IchigoKurosaki","JotaroKujo","JuviaLockser","KakashiHatake","KilluaZoldyck","KatsukiBakugo","KenshinHimura","LelouchLamperouge","LucyHeartfilia","LightYagami","LeviAckerman","MikasaAckerman","MakaAlbarn","MidoriyaIzuku","NamiNavigator","NarutoUzumaki","NatsuDragneel","NezukoKamado","OchacoUraraka","ObitoUchiha","RenjiAbarai","RukiaKuchiki","RoronoaZoro","RyukoMatoi","SaberFate","SaitamaOnePunch","ShotoTodoroki","SpikeSpiegel","SanjiBlackleg","SakuraHaruno","SasukeUchiha","ShinichiKudo","SousukeSagara","ShikamaruNara","ShinyaKogami","ShouyouHinata","TodorokiShoto","TrafalgarLaw","VegetaPrince","YugiMuto","YuYuHakusho","YusukeUrameshi","ZeroKiryu","ZerefDragneel","AlphonseElric","AllenWalker","ArminArlert","AyameSoma","AsukaLangley","Belldandy","ByakkoSuzaku","CCCode","CeltySturluson","ChopperTonyTony","DIOBrando","EchidnaWitch","ErinaNakiri","EtoYoshimura","FayeValentine","FujiwaraNoSai","GajeelRedfox","GasaiYuno","GriffithFemto","HachimanHikigaya","HajimeIppo","HanekawaTsubasa","HaruhiSuzumiya","HatsuneMiku","HeiDark","HoloWolf","HomuraAkemi","HitsugayaToshiro","IbaraShiozaki","IzayaOri","JosukeHigashikata","JunpeiHyoudou","JibrilFlugel","KaedeKayano","KagomeHigurashi","KallenStadtfeld","KanekiKen","KanadeTachibana","KazumaSatou","KibaInuzuka","KiritoBlackSword","KiyotakaAyanokouji","KonanPaperAngel","KoroSensei","KurisuMakise","KyokoSakura","LuffyMonkeyD","LightHoshikawa","MadaraUchiha","MeguminExplosion","MeliodasDragon","MioAkiyama","MiraiKuriyama","MomoYaoyorozu","NagisaShiota","NanamiMomozono","NanaOsaki","NatsuhiUshiromiya","NiaTeppelin","NicoRobin","OgaTatsumi","OkabeRintarou","OrihimeInoue","OsamuDazai","RizaHawkeye","RockLee","RoyMustang","RuiTachibana","RyoukoAsakura","SaberAlter","SadakoYamamura","SangoDemonSlayer","SayaKisaragi","SeiyaKou","SenkuIshigami","ShinobuKochou","ShionSonozaki","SubaruNatsuki","SuzakuKururugi","TaigaAisaka","TetsuoShima","TsubasaOzora","TaichiYagami","TrafalgarDWater","TsunadeSama","TsubakiNakatsukasa","UryuuIshida","UsagiTsukino","UtaTokyoGhoul","UltearMilkovich","UzuiTengen","VegetaSaiyanPrince","VashTheStampede","VioletEvergarden","VictorNikiforov","VanessaEnoteca","WhitebeardEdward","WendyMarvell","WinryRockbell","WrathFullmetal","WatashiJinrui","XerxesBreak","X1999_","XanxusVaria","XenoviaQuarta","XingkeLi","YamiSukehiro","YatoGod","YuichiroHyakuya","YokoLittner","YunoGasai","ZerefDragneel","ZeroTwo","ZenitsuAgatsuma","ZoroRoronoa","ZidaneTribal"]
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////           Emailed (Shared configs                /////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let email = "biggerpenisthanyoulol@outlook.com" // "Base" email used for eveything. ---- It's a "base" email b/c all bots will look like "biggerpenisthanyoulol+0@gmail.com" , 0=some number
    //let email = "itsjustbeenrevoked123@gmail.com"
    let pw = "extrem3Pass!"
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////        Upvote Configs                     ////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let numUpVotes = 12 // numUpVotes = STARTS FROM startAtAccount GOES TO numUpVotes. numUpVotes <= the number of your 'bots' --- Each page gets x "numUpVotes"
    let startAtAccount = 10
    let mainPageTo5Star = "https://www.webtoons.com/en/romance/secretarys-escape/list?title_no=5182"
    let allPagesToUpVote = [ "https://www.webtoons.com/en/romance/secretarys-escape/episode-1/viewer?title_no=5182&episode_no=1",
                             "https://www.webtoons.com/en/romance/secretarys-escape/episode-2/viewer?title_no=5182&episode_no=2",
                              mainPageTo5Star
                            ]
    let restPerPage = 2     //In seconds. Bot will wait x seconds until it moves onto the next page. Could be 0
    let restPerAccount =  1 //In seconds. Bot will wait x seconds until it logins into next bot. Could be 0

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////        Create Account Configs             ////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // let nickname = "Roger_Murtaugh_"
    // let nickname = "big_fan_AI34"
    // let nickname = "super_geranimo_"
    // let nickname = "xxpoopysoupxx"
    let nickname = usernames[Math.floor(Math.random()*usernames.length)]
    let startAtEmail = 250
    let numEmails = 5
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Keep track of the number of your bots
    // If first time running this, then set "startAtEmail" = 0
    // password = <whatever you want>
    // nickname = <whatever you want>
    // email    = <a real email you will use>
    // numEmails    = <the number of new bots to make>
    // startAtEmail = <the bot 'number' you want to make>,
        // ---> this is for when you want to make make more bots next week or w/e

    ///////////////////////////////////////////////////////////////////////////////////
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
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   console.log = function (message) {
//     if (false) {
//         console.dir(message)
//     }
//   }
    document.cookie = "needCOPPA=false; domain=.webtoons.com; path=/"
    let whichAction = sessionStorage.getItem("whichAction")
    let isRunning = sessionStorage.getItem("isRunning")


    window.addEventListener('load', (event) => {
      console.log("window.load event")
      console.log("window.load event - sessionStorage.getItem(isRunning) " , sessionStorage.getItem("isRunning") )
      console.log("window.load event - sessionStorage.getItem(isRunning) " , sessionStorage.getItem("isRunning") != 'true')
      if (sessionStorage.getItem("isRunning") != 'true') {
        console.log("window.load event - is true")
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
              cursor: pointer;
          }`;
          document.getElementsByTagName('head')[0].appendChild(style)
          let buttonToFunction = [kickOffAccountMaking, kickOffUpVoting]
          let buttonToNames = ["Make Accounts", "Send Likes"]

          for (let i=0; i< buttonToFunction.length; i++) {
              let btn = document.createElement("button")
              btn.innerHTML = buttonToNames[i]
              btn.classList.add("cssClass")
              btn.addEventListener("click", buttonToFunction[i])
            //   btn.addEventListener("click", renderTip)

              let header = document.getElementById("header")
              if (header && header.getElementsByClassName("lk_creators")[0]) {
                  header.getElementsByClassName("lk_creators")[0].appendChild(btn)
              } else if ( document.getElementsByClassName('logo')[0]) {
                  document.getElementsByClassName('logo')[0].appendChild(btn)
              }
          }
      }
    })

    if (document.readyState == "ready") {
        console.log("document.readyState - goBabygo()")
        goBabygo()
    } else {
        window.addEventListener('load', (event) => {
            console.log("loaded ! ! !")
            goBabygo()
        });
    }


    console.log("adding cool functions....")



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


    function goBabygo() {
        if (window.hasGoBabyGo) {
            console.log("isRunning - has go baby go, returning")
            return
        }
        window.hasGoBabyGo = true
        console.log("Loaded - isRunning ", isRunning);

        let endAtEmail = startAtEmail + numEmails
        let emailIndex = parseInt(sessionStorage.getItem("emailIndex"))

        if (sessionStorage.getItem("isRunning") != 'true' ) {
          console.log("Loaded - AccountMaking - startAtEmail=", startAtEmail)
          console.log("Loaded - AccountMaking - emailIndex=", emailIndex)
          console.log("Loaded - AccountMaking - endAtEmail=", endAtEmail)
        //   console.log("Loaded - Upvote - numUpVotes=", numUpVotes)
        //   console.log("Loaded - Upvote - restPerPage=", restPerPage)
        //   console.log("Loaded - Upvote - restPerAccount=", restPerAccount)
        }

        if (emailIndex > endAtEmail) {
            sessionStorage.setItem("isRunning",false)
            sessionStorage.setItem("emailIndex", 0)
            console.log("Loaded - Ending it 1")
        }

        if (isRunning == "true") {
            console.log("Loaded - IN RUN!!!!!!")
            return run()
        }

    }
    async function run() {
        console.log("---------- COMMAND -------------")
        if (whichAction == action.createAccounts) {
            console.log("run - Creating Accounts ... ")
            await loopCreateAccounts()
        }

        if (whichAction == action.upVote) {
            console.log("run - Upvoting ... ")
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
        console.log("kickOffAccountMaking        0")
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
        await doReadyCheck()
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
            // while (sessionStorage.getItem("isRunning") === "true" && getEmailIndex() <= endAtEmail && getEmailIndex() != null) {
            if (sessionStorage.getItem("isRunning") === "true" && getEmailIndex() <= endAtEmail && getEmailIndex() != null) {
                console.log("loop - going into creating ")
                await createNextAccount()

                if (getEmailIndex() > endAtEmail) {
                    sessionStorage.setItem("isRunning",false)
                    console.log("Ending it 2")
                }
                console.log("loop - incrementing ", getEmailIndex())
                incrementEmailIndex();
                await doReadyCheck()

                // "refresh"
                await sleep(300)
                console.log("refreshing")
                return window.location.href = 'https://www.webtoons.com/member/join?loginType=EMAIL';


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

            emailInput.value = newEmail
            await sleep(300)
            pw1Input.value = pw
            await sleep(300)
            pw2Input.value = pw
            await sleep(300)
            nicknameInput.value =  nickname + sessionStorage.getItem("emailIndex")

            console.log("emailInput.value=", emailInput.value, "pw1Input.value=",pw1Input.value, "pw2Input.value=",pw2Input.value, "nicknameInput.value=",nicknameInput.value )


            let event7 = document.createEvent('Event');
            event7.initEvent('blur', true, true);
            document.getElementById("pw").dispatchEvent(event7)
            await sleep(400)

            console.log('Creating - filling form 4.3')
            let event8 = document.createEvent('Event');
            event8.initEvent('blur', true, true);
            document.getElementById("retype_pw").dispatchEvent(event8)
            await sleep(400)

            console.log("Creating - click!!!")

            await sleep(400)
            document.getElementsByClassName("NPI=a:signup")[0].click()
            console.log("Creating - Waiting 1 seconds")
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
        console.log("commandUpVoting - ")
        // console.log("commandUpVoting - isSwitchAccounts_logout=", sessionStorage.getItem("isSwitchAccounts_logout"))
        // console.log("commandUpVoting - isSwitchAccounts_login=", sessionStorage.getItem("isSwitchAccounts_login"))
        await doReadyCheck()
        if (sessionStorage.getItem("isSwitchAccounts_logout") == "true") {
            console.log("commandUpVoting - logging out")
            await sleep(1000)
            sessionStorage.setItem("isSwitchAccounts_logout", false)
            sessionStorage.setItem("isSwitchAccounts_login", true)
            return doLogoutAndGo2Home()
        }

        if (sessionStorage.getItem("isSwitchAccounts_login") == "true" && !isLogged()) {
            console.log("commandUpVoting - log in")
            sessionStorage.setItem("isSwitchAccounts_login", false)
            await sleep(200)
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
        console.log("doLogoutAndRefresh - 1")

        await doReadyCheck()
        // document.cookie = "NEO_SES= ; path=/; domain=.webtoons.com; expires = Thu, 01 Jan 1970 00:00:00 GMT";
        deleteAllCookies()
        await sleep(250)
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
        await doReadyCheck()
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
            console.log("doUpVote - 0")
            // Do 5 start stuff
            if (window.location.href === mainPageTo5Star) {
                console.log("doUpVote - adding 5 stars")
                await sleep(2100);
                document.querySelector("#_rateButton")?.click()
                document.querySelector(".ly_grade a[title='10']")?.click()
                await sleep(10);
                document.querySelector(".ly_grade .grade_btn a[title='Send']")?.click()
                await sleep(1000);
                return
            }
            let like = document.getElementById("likeItButton")
            let subscribe = document.getElementById("footer_favorites")
            like.scrollIntoView()
            window.scrollBy(0,-150)
            await doReadyCheck()
            await sleep(1000)
            let isLikeOn = like.getElementsByClassName("_btnLike")[0].classList.contains("on")
            let isSubbedOn = subscribe.classList.contains("on")
            console.log("doUpVote - 1")

            if (!isLikeOn) {
                like.click()
                await sleep(1000)
                console.log("doUpVote - 2 - like")
            }

            if (!isSubbedOn) {
                subscribe.click()
                await sleep(1000)
                console.log("doUpVote - 2 - lisubke")
            }

            // await sleep(100)
        }
    }


        //   VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV      //
        //  VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV     //
        // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV    //
        //    VVVVVVVVV                          VVVVVVVVV    //
        //      VVVVV                              VVVVV      //
        //       VVV                                VVV       //
        //        V                                  V        //


    async function doLogin() {
        await doReadyCheck()
        console.log("Logging in")
        await sleep(5000)

        if (isLogged()) {
            console.log("User is already logged!!! Nothing to do.")
            return
        }
        if ( document.getElementById("btnLogin")){
            console.log("Logging in - btnLogin")
            const evt = new Event("click", {"view": window, "bubbles":true, "cancelable":false});
            // document.getElementById("btnLogin").dispatchEvent(evt4)
            //   const evt = new Event("click", {"view": window, "bubbles":true, "cancelable":false});
            await sleep(200)
            document.getElementById("btnLogin").dispatchEvent(evt)
        }
        else if (document.getElementById("likeItButton")) {
            console.log("Logging in - likeItButton")
            document.getElementById("likeItButton").click()
        }

        // await sleep(500)
        console.log("Logging in - filling out form...")


        let preEmail = email.split("@")
        let loginEmail = preEmail[0] + "+" + sessionStorage.getItem("botIndex") + "@" + preEmail[1]

        await sleep(150)
        document.getElementById("emailId").value = loginEmail
        await sleep(450)
        document.getElementById("password").value = pw
        await sleep(450)

        console.log('inc focus')
        const evt2 = new Event("focus", {"view": window, "bubbles":true, "cancelable":false});
        document.getElementsByClassName("t_login")[0].textContent = "Focusd!"
        document.getElementById("password").dispatchEvent(evt2)

        console.log('inc click')
        await sleep(1000)
        document.getElementsByClassName("NPI=a:email")[0].click()
        console.log("Logging in - CLICK!")
        // await sleep(300)
        return

    }













    function deleteAllCookies() {
        console.log("deleteAllCookies - 0")
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
            console.log("isLogged token == null")
            return false
        } else {
            console.log("isLogged token ! = null")
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