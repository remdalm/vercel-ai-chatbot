import { invoke } from "@tauri-apps/api/core";
import { ApplicationError } from "@/lib/utils";

export const fetcher = async <T>(command: string): Promise<T> => {
  try {
    return await invoke<T>(command);
  } catch (error) {
    const appError = new Error(
      "An error occurred while fetching the data.",
    ) as ApplicationError;

    console.error(error);

    throw appError;
  }
};

export const invoker = async <T>(
  command: string,
  args?: Record<string, unknown>,
): Promise<T> => {
  try {
    return await invoke<T>(command, args);
  } catch (e) {
    // Convert Tauri errors to match your fetch error format
    const error = new Error(
      "An error occurred while invoking the command.",
    ) as ApplicationError;

    // Parse the error information if possible
    // if (e instanceof Error) {
    //   error.info = { message: e.message };
    // } else {
    //   error.info = { message: String(e) };
    // }

    // // You might want to standardize error codes in your Rust backend
    // error.status = 500; // Default error code

    throw error;
  }
};
