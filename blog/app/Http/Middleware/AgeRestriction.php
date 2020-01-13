<?php

namespace App\Http\Middleware;

use Closure;

class AgeRestriction
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
        if ($request->age == null || $request->age <= 18) {
            return redirect('/');
        }

        return $next($request);
    }
}
