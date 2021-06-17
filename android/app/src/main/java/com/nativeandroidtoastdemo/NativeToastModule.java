package com.nativeandroidtoastdemo;
import android.widget.Toast;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class NativeToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    NativeToastModule(ReactApplicationContext reactApplicationContext){
        super(reactApplicationContext);
        reactContext = reactApplicationContext;
    }

    @Override
    public String getName() {
        return "NativeToastModule";
    }
    //this method will be called from the react native 
    @ReactMethod
    public void showMessage(String message, int duration) {
        Log.d("NativeToastModule", message);
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }
}
