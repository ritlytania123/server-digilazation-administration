export declare enum DocumentType {
    KTP = "ktp",
    KK = "kk"
}
export declare class CreateLostReportDto {
    full_name: string;
    address: string;
    lost_reason: string;
    police_lost_report_document: string;
    lost_time_incident: Date;
    document_lost: DocumentType;
    support_document_identity: string;
}
