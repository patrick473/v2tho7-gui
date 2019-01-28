export interface DatabaseType {
    id: number;
    dialect: string;
    triggerTemplate: string;
    constraintTemplate: string;
}
