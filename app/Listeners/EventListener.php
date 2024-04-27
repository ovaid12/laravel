<?php

namespace App\Listeners;

use App\Events\Event1;
use App\Events\Event2;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class EventListener
{
   
    public function handle($event)
    {
        if ($event instanceof Event1) {
            $this->handleEvent1($event);
        } elseif ($event instanceof Event2) {
            $this->handleEvent2($event);
        }
    }

    public function handleEvent1(Event1 $event)
    {
        dd($event->test);
    }

    public function handleEvent2(Event2 $event)
    {
        dd($event->test2);
    }
}
