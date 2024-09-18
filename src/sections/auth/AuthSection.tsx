"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@headlessui/react";
import { useApiKey } from "@/hooks/useApiKey";
import { weatherService } from "@/services/WeatherService";
import { AlertDialog } from "@radix-ui/themes";
import { useToast } from "@/components/Toast/Toast";

type Inputs = {
  apiKey: string;
};

export default function AuthSection() {
  const { apiKey, saveApiKey } = useApiKey();
  const { open } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // saveApiKey(data.apiKey);
    const response = await weatherService.getWeather(
      41.0082,
      28.9784,
      data.apiKey
    );
    if (response.success) {
    } else {
      console.log("response", response);
      open({
        message: response.message,
        variant: "error",
        position: "bottom-right",
        duration: 3000
      });
    }
    console.log("response GELEN ", response);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          API Key Giriş
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="apiKey"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              API Key'inizi girin:
            </label>
            <Input
              {...register("apiKey", { required: "API Key gereklidir" })}
              id="apiKey"
              name="apiKey"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="API Key'inizi buraya girin"
            />

            {errors.apiKey && (
              <span className="text-red-500 text-sm mt-1">
                {errors.apiKey.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
          >
            Api Key ile Giriş Yap
          </Button>
        </form>
      </div>
    </div>
  );
}
