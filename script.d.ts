interface SkillProgress {
    element: HTMLElement;
    width: string;
}
interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}
interface LanguageContent {
    zh: string;
    en: string;
}
declare class PersonalWebsite {
    private navMenu;
    private hamburger;
    private skillBars;
    private contactForm;
    private langToggle;
    private currentLang;
    private observer;
    constructor();
    private init;
    private setupNavigation;
    private setupSmoothScrolling;
    private setupNavbarScroll;
    private setupScrollAnimations;
    private setupSkillBars;
    private animateSkillBar;
    private setupContactForm;
    private handleFormSubmission;
    private validateForm;
    private submitForm;
    private showMessage;
    private startTypingAnimation;
    private setupParallax;
    private setupCardHovers;
    private setupLanguageToggle;
    private setupBackToTop;
    private setupPageNavigation;
    private setupTimelineReadMore;
    private toggleLanguage;
    private updateLanguage;
    private updateSpecialContent;
    initializeAnimations(): void;
}
declare const style: HTMLStyleElement;
