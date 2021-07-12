
MsgBox F3 to being clicking `n`n F4 stops.

isStopped := false

F3::
	MsgBox Sending 1 click per 2 second at webtoons homepage`n`nPress F4 to stop.
	isStopped := false
	while (isStopped != true) {
        if ( isStopped = true ) {
            break
        }
        Sleep, 2000
        ; Click
        ControlClick, x30 y300, WEBTOON - Read Comics Online - Google Chrome ahk_class Chrome_WidgetWin_1,, LEFT, 1, NA
        ; ControlClick, x30 y300, WEBTOON - Read Comics Online — Mozilla Firefox ahk_class MozillaWindowClass,, LEFT, 1, NA
        ; ControlSend, MozillaCompositorWindowClass1, a,  WEBTOON - Read Comics Online — Mozilla Firefox ahk_class MozillaWindowClass
        ; ControlSend, Chrome_RenderWidgetHostHWND1, a,  WEBTOON - Read Comics Online - Google Chrome ahk_class Chrome_WidgetWin_1
    }
	return

F4::
	MsgBox Turning off `n`nPress F3 to resume.
	isStopped := true
	return
