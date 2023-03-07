import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const fingerRingGesture = new GestureDescription('finger_ring');

//Thumb
fingerRingGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
fingerRingGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
fingerRingGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.5);

//Index
fingerRingGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);
fingerRingGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 0.5);
fingerRingGesture.addDirection(Finger.Ring, FingerDirection.VerticalDown, 0.5);

//other
for(let finger of [Finger.Index, Finger.Middle, Finger.Pinky]){
    fingerRingGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    fingerRingGesture.addDirection(finger, FingerDirection.VerticalUp, 0.5);
}