package com.nativeandroidtoastdemo;
import android.widget.Toast;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
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

    /**
     * this method will be called from the react native to raise the toast with the provided message
     * @param message
     * @param duration
     */
    @ReactMethod
    public void showMessage(String message, int duration) {
        Log.d("NativeToastModule", message);
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }

    /**
     * Method to return the sum of num1 & num2 , callback is used to pass the data
     * @param num1
     * @param num2
     * @param processResult
     */
    @ReactMethod
    public void sum(int num1, int num2, Callback processResult) {
        Log.d("NativeToastModule sum:", num1+" " + num2);
        processResult.invoke(num1+num2);
    }
}
