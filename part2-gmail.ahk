SetTitleMatchMode, RegEx

MsgBox F9 to being email loop `n`n F10 pause. `n`n f12 get ud

F12::
    
    WinActivate, Inbox.*\sitsjustbeenrevoked123@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1
    ; WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
     MsgBox, %ActiveWindowID%
    return
F10::
    isStopped := true
    Suspend
    Pause

F9::
    Loop, 100
    {
    if ( isStopped = true ) {
        ;MsgBox IS STOPPED!!!!!!
        break
        }

        Sleep, 263
        ;WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        WinActivate, Inbox.*\sitsjustbeenrevoked123@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1

        ; Click Email
        ControlClick, x500 y410, Inbox.*\sitsjustbeenrevoked123@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        ;Click, 500, 410
        Sleep, 333

        ; Click verfication link    
        ControlClick, x1444 y820, Inbox.*\sitsjustbeenrevoked123@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        ;Click, 1444, 820
        Sleep, 1555

        ; Close verification email
        ControlClick, x444 y10, email confirm | WEBTOON ahk_class Chrome_WidgetWin_1,, MIDDLE, 1, NA
        ;Click, 444, 10
        Sleep, 716
        

        ; Delete email
        ControlClick, x600 y250, Inbox.*\sitsjustbeenrevoked123@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        ;Click, 600, 250
        Sleep, 716

        
        ; Click Email
        ;Click, 439, 344
        ;Sleep, 2263
    
        ; Click Link
        ;Click, 1176, 734
        ;Sleep, 2263
        
        ; Close Window
        ;Click, 328, 19, Middle
        ;Sleep, 4263

        ; Delete the Email
        ;Click, 	541, 222 
        ;Sleep, 2128


    }

