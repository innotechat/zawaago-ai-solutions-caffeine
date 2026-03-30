import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    company: string;
    timestamp: Time;
    phone: string;
    projectDetails: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, company: string, email: string, phone: string, projectDetails: string): Promise<void>;
}
