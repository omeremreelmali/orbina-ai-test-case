import { HOST_API } from "@/constants/Api";
import { IBaseResponse } from "@/types/services";
import { AlertDialog } from "@radix-ui/themes";

import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
export class HttpClient {
  private axiosInstance: AxiosInstance;
  private config: AxiosRequestConfig;

  constructor(baseURL?: string) {
    this.axiosInstance = axios.create({
      baseURL: baseURL ? baseURL : HOST_API
    });
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: ""
      }
    };
  }

  public async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IBaseResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url, {
        ...this.config,
        ...config
      });
      return {
        status: response.status,
        message: "Yanıt alındı.",
        success: true,
        data: response.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<IBaseResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        data,
        { ...this.config, ...config }
      );
      return {
        status: response.status,
        message: "Yanıt alındı.",
        success: true,
        data: response.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<IBaseResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        url,
        data,
        { ...this.config, ...config }
      );
      return {
        status: response.status,
        message: "Yanıt alındı.",
        success: true,
        data: response.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<IBaseResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch(
        url,
        data,
        {
          ...this.config,
          ...config
        }
      );
      return {
        status: response.status,
        message: "Yanıt alındı.",
        success: true,
        data: response.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IBaseResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(url, {
        ...this.config,
        ...config
      });
      return {
        status: response.status,
        message: "Yanıt alındı.",
        success: true,
        data: response.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  private handleError(error: unknown): {
    status: number;
    message: string;
    success: boolean;
  } {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.response) {
        console.log("Hata yanıtı:", axiosError.response.data);
        console.log("Hata durumu:", axiosError.response.status);

        if (axiosError.response.status === 401) {
          console.log("401 Yetkilendirme hatası");
          return {
            status: axiosError.response.status,
            message: "API Key Hatalı",
            success: false
          };
        }

        return {
          status: axiosError.response.status,
          message: `Sunucu hatası: ${axiosError.response.status}`,
          success: false
        };
      } else if (axiosError.request) {
        // CORS hatası veya ağ hatası
        console.log("Ağ hatası:", axiosError.message);
        return {
          status: 0, // Ağ hataları için genellikle 0 kullanılır
          message: "Ağ hatası veya CORS sorunu",
          success: false
        };
      } else {
        console.log("Hata:", axiosError.message);
        return {
          status: 500,
          message: "Bilinmeyen bir hata oluştu",
          success: false
        };
      }
    } else {
      console.log("Bilinmeyen hata:", error);
      return {
        status: 500,
        message: "Bilinmeyen bir hata oluştu",
        success: false
      };
    }
  }
}

export const httpClient = new HttpClient();

export default HttpClient;
