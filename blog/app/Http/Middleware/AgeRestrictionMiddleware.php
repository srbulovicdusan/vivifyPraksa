<?php

namespace App\Http\Middleware;

use Closure;

class AgeRestrictionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (empty($request->age) || $request->age <= 18) {
            return redirect('/');
        }

        return $next($request);
    }
}
