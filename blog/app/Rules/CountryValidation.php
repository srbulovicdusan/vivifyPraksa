<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Webpatser\Countries\Countries;

class CountryValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $countries = Countries::all();
        return $countries->contains('name', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
