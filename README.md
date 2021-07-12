Here's how to run the script. It's very simple and stupid, the tech is very unimpressive, it acts like
how a regular person would create an account or favorite a comic. Webtoons has enough security features to be kind of a pain.

Directions:
Note this: When you run the account creation process (part 1), or the upvoting process (part 3) the window 
that has the script running must be somewhere on a monitor where the page is being rendered. 
You cannot go to any other tabs in that window. You might be able to drag the window in a corner and make it very small, maybe a window can lay on top I havn't tried but you can't change tabs b/c it has to be rendering the page on the screen.

Note 2: If something odd happens you could try finishing the process by clicking login or freshing or s/t.

1. Download the Tampermonkey extension for firefox or chrome.
2. Download Autohotkey
2.5. Download (highly recommened) Pulover's Macro Creator.
3. Click Tampermonkey extension -> Dashboard -> click that "+" tab -> paste bttr3-webtoons.js -> save
4. Edit the script's variables near to top
    - Edit it to w/e you want, your configuration. 
    - Enter a email and a password/username that would pass webtoons requirments

The video "Part 1" shows how to create accounts. Fill in the configs then click the button. (Easy)

The video "Part 2" shows a trick on how to shittily automate the process of verifying emails. 
The idea is that you record the clicks that verify a email then copy and paste that recorded process into a script I wrote that loops it. Here are the instructions b/c I know the video is unclear
    1. Download Pulover's Macro Creator, and Autohotkey
    2. Open Pulover's, then go to email.
    3. (Figure out a clicking pattern to loop)
        - My formula was (first before running, not even recording) use the search to filter & only display those verification emails: 
        DO: Click topmost email -> click link -> close the tab that auto opens -> delete topmost email --> repeat
    4. Press red button (record) then F9
    5. Do the clicking formula -> File -> Export -> Save as MyScript.ahk (or w/e) -> Open that file
    6. Find where your loop starts, should be where a "WinActive" line has text equal to the text of that window as you see it in the taskbar (screen shots)
    7. copy that block & paste it into my provided script "webscript.ahk" (screen shot)
        - At 2:45 I run it once before editing to see what is happening
    8. Delete all those Click-0's. I kept a few of those at the start and end b/c it was acting weird, idk
    9. Verify
        - at :50 I run it with essentially number-of-loops=1
    9. Increase number of loops to w/e. Kick it  
        - The whole thing in action is at 5:05



The video "Part 3" shows how to send favorites/upvotes to pages. 
Unfortunately, using your computer for anything other than watching videos won't really be possible.
B/c the workaround I did to trick webtoons was to continuously send clicks to the page, thus the script keeps changing focus to that window :(
    0. sendClicks.ahk should be open and idle. This script does nothing unless you start it via F3.
    1. Fill in the configs then click "send likes".
    2. Press F3. 
    3. Take a nap, your done


