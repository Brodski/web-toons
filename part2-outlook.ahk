SetTitleMatchMode, RegEx

MsgBox F9 to being email loop `n`n F10 pause. `n`n f12 get ud

F12::
    WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail
    ; WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
    ; MsgBox, %ActiveWindowID%
    return
F10::
    Pause

F9::
    Loop, 1
    {

        WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        ; WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail

        Click, 448, 425 Left, Down
        Sleep, 46
        Click, 448, 425, 0
        Sleep, 63
        Click, 448, 425 Left, Up

        Sleep, 297
        Click, 1133, 691, 0
        Sleep, 313
        Click, 1133, 691 Left, Down
        Sleep, 78
        Click, 1133, 691 Left, Up
        Sleep, 594

        Sleep, 454
        WinActivate, email confirm | WEBTOON - Google Chrome ahk_class Chrome_WidgetWin_1
        Click, 428, 28 Middle, Down
        Sleep, 171
        Click, 428, 28 Middle, Up
        Sleep, 547
        Sleep, 16
        Click, 410, 244, 0
        Sleep, 16
        Click, 410, 242, 0
        Sleep, 15
        Click, 409, 242, 0
        Sleep, 172
        WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        Click, 409, 242 Left, Down
        Sleep, 94
        Click, 409, 242 Left, Up
        Sleep, 328


    }
