declare module 'telegraf-i18n_my' {
    interface Config {
        directory?: string;
        useSession?: boolean;
        sessionName?: string;
        allowMissing?: boolean;
        defaultLanguageOnMissing?: boolean;
        defaultLanguage?: string;
    }

    type ContextUpdate = (ctx: any, next?: (() => any) | undefined) => any;

    export class I18n {
        constructor (input: Config);
        loadLocales (directory: string): void;
        loadLocale (languageCode: string, i18Data: object): void;
        resetLocale (languageCode: string): void;
        availableLocales (): string[];
        resourceKeys (languageCode: string): string[];
        missingKeys (languageOfInterest: string, referenceLanguage?: string): string[];
        overspecifiedKeys (languageOfInterest: string, referenceLanguage?: string): string[];
        translationProgress (languageOfInterest: string, referenceLanguage?: string): number;
        middleware(): ContextUpdate;
        createContext (languageCode: string, templateData: object): void;
        t (languageCode?: string, resourceKey?: string, templateData?: object): string;
        t (resourceKey?: string, templateData?: object): string;
        locale (): string;
        locale (languageCode?: string): void;
        static match(string: string, contextData?: any): string;
    }

    export default I18n;
}
