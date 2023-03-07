import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fingerIndexGesture = new GestureDescription('finger_index');

//Thumb
fingerIndexGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fingerIndexGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fingerIndexGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

//Index
fingerIndexGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
fingerIndexGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.5);
fingerIndexGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 0.5);

//other
for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]){
    fingerIndexGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    fingerIndexGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}