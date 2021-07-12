SetTitleMatchMode, RegEx

MsgBox F9 to being email loop `n`n F10 pause. `n`n f12 get ud

F12::
    WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1
    ; WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
    ; MsgBox, %ActiveWindowID%
    return
F10::
    Pause

F9::
    Loop, 2
    {

        Sleep, 263
        ;WinActivate, Mail - john jackson - Outlook - Google Chrome ahk_class Chrome_WidgetWin_1
        WinActivate, Inbox.*\scbrodski@gmail.com\s-\sGmail ahk_class Chrome_WidgetWin_1
        
        ; Click Email
        Click, 439, 344
        Sleep, 2263
    
        ; Click Link
        Click, 1176, 734
        Sleep, 2263
        
        ; Close Window
        Click, 328, 19, Middle
        Sleep, 4263

        ; Delete the Email
        Click, 	541, 222 
        Sleep, 2128


    }

