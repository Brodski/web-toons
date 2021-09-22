SetTitleMatchMode, RegEx

MsgBox F9 to being email loop `n`n F10 pause. `n`n f12 get ud

F12::
    WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail
    ; WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
    ; MsgBox, %ActiveWindowID%
    return
F10::
    Pause

        ; WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail
        ; ControlClick, x30 y300,  Inbox.*\scbrodski@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        ;ControlClick, x1133 y681, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
F3:: 

    ControlSend, , ^r, Episode 48 | See You in My 19th Life.*
    ;Send, ^r
    return
F9::
    x := 0

    Loop, 30
    {
        ;MsgBox, BAMMMM! + %x%

       ; x++
      ;  Sleep, 3600
     ;   if Mod(x,2) = 0 {
    ;        x := 0
   ;         MsgBox, "SHAXAM"

  ;      ControlSend, , {F5}, (4) League of Legends - Twitch — Mozilla Firefox ahk_class MozillaWindowClass
            ; Send, {F5}
 ;       }
;        Sleep, 1000

        WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        
        ; Click Email
        ControlClick, x448 y425, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        Sleep, 333

        ; Click verfication link    
        ControlClick, x1133 y681, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1,, MIDDLE, 1, NA
        Sleep, 1555

        ; Close verification email
        ControlClick, x428 y28, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1,, MIDDLE, 1, NA
        Sleep, 716
        ; Click, 428, 28, Middle

        

        ; Delete email
        ControlClick, x404 y200, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        Sleep, 716

        ;Click, 448, 425 Left, Down
        ;Sleep, 46
        ;Click, 448, 425, 0
        ;Sleep, 63
        ;Click, 448, 425 Left, Up


;        Sleep, 297
;        Click, 1133, 681, 0
;        Sleep, 313
;        Click, 1133, 681 Left, Down
;        Sleep, 78
;        Click, 1133, 681 Left, Up
;        Sleep, 594

        ;Sleep, 454
        ; WinActivate, email confirm | WEBTOON - Google Chrome ahk_class Chrome_WidgetWin_1
        ;Click, 428, 28 Middle, Down
        ;Sleep, 171
        ;Click, 428, 28 Middle, Up
        ;Sleep, 447 

        ; WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        ;Click, 	404, 199  Left, Down
        ;Sleep, 94
        ;Click, 	404, 199  Left, Up
        ;Sleep, 1428




    }

