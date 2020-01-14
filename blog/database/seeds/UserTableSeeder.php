<?php


use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    //     DB::table('users')->insert([
    //         'name' => Str::random(10),
    //         'email' => Str::random(10).'@gmail.com',
    //         'password' => bcrypt('password'),
    //         'email_verified_at' => Carbon::create('2000', '01', '01'),

    //     ]);
        factory(App\User::class, 50)->create()->make();
       
    }
}
