//
//  CalendarManager.swift
//  RTMPIos
//
//  Created by Mikle Maschenko on 6/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

// CalendarManager.swift

@objc(CalendarManager)
class CalendarManager: NSObject {
  
  @objc func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
    NSLog("%@ %@ %S", name, location, date);
  }
  
}
