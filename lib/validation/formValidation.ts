/**
 * Form validation utilities
 * Provides reusable validation functions and error messages
 */

export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface FieldValidation {
  [fieldName: string]: ValidationRule[];
}

export interface ValidationErrors {
  [fieldName: string]: string;
}

/**
 * Common validation rules
 */
export const validationRules = {
  required: (message = "This field is required"): ValidationRule => ({
    validate: (value: any) => {
      if (Array.isArray(value)) return value.length > 0;
      if (typeof value === "string") return value.trim().length > 0;
      return value !== null && value !== undefined && value !== "";
    },
    message,
  }),

  email: (message = "Please enter a valid email address"): ValidationRule => ({
    validate: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message,
  }),

  minLength: (
    length: number,
    message = `Must be at least ${length} characters`
  ): ValidationRule => ({
    validate: (value: string) => value.length >= length,
    message,
  }),

  maxLength: (
    length: number,
    message = `Must be no more than ${length} characters`
  ): ValidationRule => ({
    validate: (value: string) => value.length <= length,
    message,
  }),

  phone: (message = "Please enter a valid phone number"): ValidationRule => ({
    validate: (value: string) => {
      // Allow various phone formats: +1234567890, (123) 456-7890, 123-456-7890, etc.
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
      return phoneRegex.test(value.replace(/\s/g, ""));
    },
    message,
  }),

  pattern: (regex: RegExp, message: string): ValidationRule => ({
    validate: (value: string) => regex.test(value),
    message,
  }),

  custom: (validatorFn: (value: any) => boolean, message: string): ValidationRule => ({
    validate: validatorFn,
    message,
  }),
};

/**
 * Validate a single field
 */
export function validateField(value: any, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return rule.message;
    }
  }
  return null;
}

/**
 * Validate all fields in a form
 */
export function validateForm(
  formData: Record<string, any>,
  fieldValidations: FieldValidation
): ValidationErrors {
  const errors: ValidationErrors = {};

  for (const [fieldName, rules] of Object.entries(fieldValidations)) {
    const value = formData[fieldName];
    const error = validateField(value, rules);
    if (error) {
      errors[fieldName] = error;
    }
  }

  return errors;
}

/**
 * Check if validation errors object has any errors
 */
export function hasValidationErrors(errors: ValidationErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Book a Meeting form validation schema
 */
export const bookMeetingValidation: FieldValidation = {
  firstName: [
    validationRules.required("First name is required"),
    validationRules.minLength(2, "First name must be at least 2 characters"),
  ],
  lastName: [
    validationRules.required("Last name is required"),
    validationRules.minLength(2, "Last name must be at least 2 characters"),
  ],
  email: [
    validationRules.required("Email is required"),
    validationRules.email("Please enter a valid email address"),
  ],
  mobile: [
    validationRules.required("Mobile number is required"),
    validationRules.phone("Please enter a valid phone number"),
  ],
  restaurantName: [
    validationRules.required("Restaurant name is required"),
    validationRules.minLength(2, "Restaurant name must be at least 2 characters"),
  ],
  restaurantCity: [
    validationRules.required("Restaurant city is required"),
    validationRules.minLength(2, "City name must be at least 2 characters"),
  ],
};
