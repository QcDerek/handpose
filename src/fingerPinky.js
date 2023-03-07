import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fingerPinkyGesture = new GestureDescription('finger_pinky');

//Thumb
fingerPinkyGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fingerPinkyGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fingerPinkyGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

//Index
fingerPinkyGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
fingerPinkyGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 0.5);
fingerPinkyGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 0.5);

//other
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]){
    fingerPinkyGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    fingerPinkyGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}