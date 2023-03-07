import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fingerMiddleGesture = new GestureDescription('finger_middle');

//Thumb
fingerMiddleGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fingerMiddleGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fingerMiddleGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

//Middle
fingerMiddleGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0);
fingerMiddleGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 0.5);
fingerMiddleGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.5);

//Ring
fingerMiddleGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
fingerMiddleGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.4);
fingerMiddleGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.5);

//other
for(let finger of [Finger.Index, Finger.Pinky]){
    fingerMiddleGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    fingerMiddleGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}